import axios from "axios"
import ProductsPCTechModel from "../models/productpctech"
import { IInventory, IProductPcTech, IProductSYSCOM, categoriaSYSCOM, existenciaSYSCOM } from "../interfaces"

const dropCollection = async () => {
    return ProductsPCTechModel.deleteMany({})
}

const getProductsPcTech = async () => {
    const customerID = process.env.customer
    const keycustomer = process.env.key
    const xchange = await axios.post(
        `${process.env.urlPCTECH}/extcust/getparity`,
        { customer: customerID, key: keycustomer },

        {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        }
    )

    try {

        const response =  await axios.post(
            `${process.env.urlPCTECH}/extcust/getprodlist`,
            { customer: customerID, key: keycustomer },

            {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            }
        )

        if (response.data.status === 200) {
                const products = response.data.data.productos;

                products.forEach(async (product: IProductPcTech) => {
                    let quantityTotalInventory: Number = 0
                    let warehouse : Number | any = 0
                    if (product.inventario?.length) {
                        product.inventario.map(async (inventory: IInventory) => {
                            warehouse = inventory.almacen_id
                            quantityTotalInventory = Number(quantityTotalInventory) + Number(inventory.cantidad)
                        })
                    }
                    product.warehouse = warehouse
                    product.inventario = []
                    product.totalinventario = quantityTotalInventory
                    product.origin = "pctech"
                    product
                    if (product.moneda === 'USD') {
                        product.precioMXN = Number(product.precio) * xchange.data.data[0].USD
                    }
                    try {
                        await ProductsPCTechModel.create({ ...product })
                            // .then((response) => { console.log('response ', response)})
                            .catch((error) => { console.error('error ', error) })
                    } catch (error) {
                        return error
                    }
                });
        }
    } catch (error) {
        // Manejar el error aquí, por ejemplo, mostrar un mensaje de error al usuario o registrar el error.
        console.error('Error en la solicitud:', error);
        throw error; // Puedes volver a lanzar el error si es necesario.
    }
}

const getProductsSYSCOM = async (param: String) => {
    return find(null, param, param, null)
}

const getProductsByBrand = async (param: String) => {
    return find(null, null, null, param)
}

const getProductPCTECHByID = async (id: String) => {
    const productsPCTEC = await ProductsPCTechModel.find({ sku: `${id}` }).exec()

    if (productsPCTEC.length) {
        const product: IProductSYSCOM[] = []
        productsPCTEC.forEach((element: IProductPcTech) => {
            let inventario: existenciaSYSCOM = { nuevo: Number(element.totalinventario) }
            const elementProduct = {
                alto: String(element.alto),
                ancho: String(element.ancho),
                caracteristicas: [String(element.descripcion)],
                categorias: String(element.seccion),
                modelo: element.serie,
                producto_id: String(element.sku),
                // total_existencia: inventario,
                marca: element.marca,
                titulo: element.descripcion,
                pvol: String(element.volumen),
                descripcion: element.descripcion,
                peso: String(element.peso_bruto),
                existencia: Number(element.totalinventario),
                largo: String(element.largo),
                precios: element.precioMXN,
                origin: element.origin,
                warehouse: element.warehouse
            }
            product.push(elementProduct)
        })
        return product
    }
}

const getProductSYSCOMByID = async (id: String) => {
    const idFormated = Number(id)
    const url = `${process.env.urlSYScom}/productos/${idFormated}`;
    try {
        const { data, status } = await axios.get(url, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': `${process.env.tkn}`
            }
        })

        return data

    } catch (error) {
        console.error('Error fetching category data:', error);
        throw error;
    }
}

const find = async (param: String | null, seccion: String | null, linea: String | null, marca: String | null) => {
    let url: string = ''
    let productsPCTEC: any[] = []
    if (marca) {
        marca = String(marca).toLocaleLowerCase()
        url = `${process.env.urlSYScom}/productos?marca=${marca}`;
        marca = String(marca).toUpperCase()
        productsPCTEC = await ProductsPCTechModel.find({ marca: { $regex: `.*${marca}.*` } })
    }
    if (seccion && linea) {
        url = `${process.env.urlSYScom}/productos?busqueda=${seccion}`;
        seccion = String(seccion).toUpperCase()
        linea = String(linea).toUpperCase()
        productsPCTEC = await ProductsPCTechModel.find({ seccion: { $regex: `.*${seccion}.*` }, linea: { $regex: `.*${linea}.*` } })
    }

    const products: IProductSYSCOM[] = []

    if (productsPCTEC.length) {
        productsPCTEC.forEach((element: IProductPcTech) => {
            let inventario: existenciaSYSCOM = { nuevo: Number(element.totalinventario) }
            let product: IProductSYSCOM = {
                alto: String(element.alto),
                ancho: String(element.ancho),
                caracteristicas: [String(element.descripcion)],
                categorias: String(element.seccion),
                modelo: element.serie,
                producto_id: String(element.sku),
                // total_existencia: inventario,
                marca: element.marca,
                titulo: element.descripcion,
                pvol: String(element.volumen),
                descripcion: element.descripcion,
                peso: String(element.peso_bruto),
                existencia: Number(element.totalinventario),
                largo: String(element.largo),
                precios: element.precioMXN,
                origin: element.origin
            }
            products.push(product)
        })
    }

    try {
        const { data, status } = await axios.get(url, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': `${process.env.tkn}`
            }
        })

        data.productos.forEach((el: IProductSYSCOM) => {
            products.push(el)
        })

        data.productos = products

        return products.length || data.status === 200 ? data : []

    } catch (error) {
        console.error('Error fetching category data:', error);
        throw error;
    }
}



export { getProductsPcTech, dropCollection, getProductsSYSCOM, getProductPCTECHByID, getProductSYSCOMByID, getProductsByBrand }
