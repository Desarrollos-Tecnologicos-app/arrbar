import { Request, response, Response } from "express"
import { handleHttp } from "../utils/error.handle"
import { IOrderPCTECH, IOrderSYSCOM, IProductOrder } from "../interfaces"

const filterByProvider = async ({ body }: Request, res: Response) => {
	const { direccion, productos } = body

    const products = new Array(productos)[0] as IProductOrder[]

    const orderPCTECH: IOrderPCTECH[] = []
    const orderSYSCOM: IOrderSYSCOM[] = []

    products.forEach((product:IProductOrder) => {
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

const makeOrderSYSCOM = async (direccion: any, orderSYSCOM: any) => {
    console.log('my syscom products ', orderSYSCOM)
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

const makeOrderPCTECH = async (direccion: any, orderPCTECH: any) => {
    const customer = `${process.env.customer}`;
    const keyCustomer = `${process.env.key}`;

    console.log('my pctech products ', orderPCTECH)

    /*
    {
        "insurance": false,
        "ocnumber": "PRUEBA_WS",
        "receive": "Adalberto Vazquez",
        "street": "Giusep",
        "street2": "Estans",
        "city": "Zapop",
        "state": "Jal",
        "zip": "00000",
        "phone": "Telefono",
        "spe_delivery" : 25,
        "ws_guide": "",
        "products": [
            {
                "warehouse": 1,
                "sku": "179195",
                "qty": 1
            }
        ]
    }
    */

}

export {
    filterByProvider
}