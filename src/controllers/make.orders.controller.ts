import { Request, response, Response } from "express"
import { handleHttp } from "../utils/error.handle"

const filterByProvider = async ({ body }: Request, res: Response) => {
	const { direccion, productos } = body

    const orderPCTECH: any[] = []
    const orderSYSCOM: any[] = []

    
	
}

const makeOrderSYSCOM = async () => {
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

const makeOrderPCTECH = async () => {
    const customer = `${process.env.customer}`;
    const keyCustomer = `${process.env.key}`;

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

