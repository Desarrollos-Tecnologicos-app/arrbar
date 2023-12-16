import { Request, response, Response } from "express"
import { handleHttp } from "../utils/error.handle"
import { ICustomer, IOrderPCTECH, IOrderSYSCOM, IProductOrder } from "../interfaces"
import { generateOrderPCTECH } from "../services/orders.service"

const filterByProvider = async ({ body }: Request, res: Response) => {
    const { direccion, productos } = body

    const products = new Array(productos)[0] as IProductOrder[]
    const direction = new Array(direccion)[0] as ICustomer

    if (!products.length || !direction) {
        handleHttp(res, "PRODUCTS EMPTY")
    }

    const orderPCTECH: IOrderPCTECH[] = []
    const orderSYSCOM: IOrderSYSCOM[] = []

    products.forEach((product: IProductOrder) => {
        if (product.origin === "pctech") {
            let productpctech: IOrderPCTECH = {
                qty: product.cantidad,
                sku: product.producto_id,
                warehouse: Number(product.warehouse)
            }
            orderPCTECH.push(productpctech)
        }

        if (product.origin === "syscom") {
            let productsyscom: IOrderSYSCOM = {
                cantidad: product.cantidad,
                id: Number(product.producto_id),
                tipo: String(product.tipo)
            }
            orderSYSCOM.push(productsyscom)
        }
    })

    if (orderPCTECH.length) {
        makeOrderPCTECH(direccion, orderPCTECH)
    }

    if (orderSYSCOM.length) {
        makeOrderSYSCOM(direccion, orderSYSCOM)
    }

}

const makeOrderSYSCOM = async (direction: ICustomer, orderSYSCOM: IOrderSYSCOM[]) => {
    // console.log('my syscom products ', orderSYSCOM)
    /*{
        "tipo_entrega":"domicilio",
        "direccion": {
            "atencion_a": "PRUEBAS PRUEBAS PRUEBAS",
            "calle": "Calle random",
            "num_ext": "100",
            "num_int": "",
            "colonia": "ZONA INDUSTRIAL",
            "codigo_postal": 44940,
            "pais": "MÉX",
            "estado": "JAL",
            "ciudad": "Guadalajara",
            "telefono": "1234567890"
        },
        "metodo_pago":"credito-30",
        "fletera":"estafeta",
        "productos":[
            {"id":27949, "tipo":"nuevo", "cantidad": 1 },
            {"id":183694, "tipo":"nuevo", "cantidad": 15 }
        ],
        "moneda":"mxn",
        "uso_cfdi":"G03",
        "tipo_pago":"ppd",
        "orden_compra":"ABC-12345",
        "ordenar":false,
        "iva_frontera":true,
        "forzar":false,
        "testmode":false
    }*/
}

const makeOrderPCTECH = async (direction: ICustomer, orderPCTECH: IOrderPCTECH[]) => {
    const customer = `${process.env.customer}`;
    const keyCustomer = `${process.env.key}`;

    const numInt = `${direction.num_int}` ? `${direction.num_int}, ` : ''

    let order = {
        customer: customer,
        key: keyCustomer,
        insurance: true,
        warehouse: orderPCTECH[0].warehouse,
        ocnumber: `${await cadenaAleatoria(18)}`,
        receive: `${direction.atencion_a}`,
        street: `${direction.calle}, ${direction.num_ext}, ${numInt} ${direction.colonia}`,
        street2: `${direction.calle}, ${direction.num_ext}, ${numInt} ${direction.colonia}`,
        city: direction.ciudad,
        state: direction.estado,
        zip: `${Number(direction.codigo_postal)}`,
        phone: direction.telefono,
        spe_delivery: 25,
        ws_guide: "",
        products: orderPCTECH
    }

    await generateOrderPCTECH(order)
        .then((response) => {
            return response.data
        })
        .catch(err => {
            return err
        })

}

const cadenaAleatoria = async (longitud: any) => {
    const banco = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let aleatoria = "";
    for (let i = 0; i < longitud; i++) {
        aleatoria += banco.charAt(Math.floor(Math.random() * banco.length));
    }
    return aleatoria;
};

export {
    filterByProvider
}