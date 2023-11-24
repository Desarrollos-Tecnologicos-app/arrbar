import { Schema, Types, model, Model } from "mongoose"
import { IProductPcTech } from "../interfaces"

const ProductsPCTECHSchema = new Schema<IProductPcTech>(
    {
        inventario: [{
            type: Schema.Types.ObjectId,
            ref: 'inventario',
            required: false
        }],
        totalinventario: {
            type: Number,
            required: false
        },
        moneda: {
            type: String,
            required: false,
        },
        descripcion: {
            type: String,
            required: false,
        },
        sku: {
            type: String,
            required: false,
        },
        id_seccion: {
            type: Number,
            required: true,
        },        
        peso_bruto: {
            type: Number,
            required: false
        },
        id_linea: {
            type: Number,
            required: false
        },
        ancho: {
            type: Number,
            required: false
        },
        promo: {
            type: Boolean,
            required: false
        },
        skuFabricante: {
            type: String,
            required: false
        },
        marca: {
            type: String,
            required: false
        },
        serie: {
            type: String,
            required: false
        },
        seccion: {
            type: String,
            required: false
        },
        id_marca: {
            type: Number,
            required: false
        },
        id_serie: {
            type: Number,
            required: false
        },
        alto: {
            type: Number,
            required: false
        },
        volumen: {
            type: Number,
            required: false
        },
        precio: {
            type: Number,
            required: false
        },
        precioMXN : {
            type: Number,
            required: false
        },
        upc: {
            type: String,
            required: false
        },
        largo: {
            type: Number,
            required: false
        },
        peso_neto: {
            type: Number,
            required: false
        },
        linea: {
            type: String,
            required: false
        },
        origin: {
            type: String,
            required: false
        }
    },
    {
        versionKey: false,
        timestamps: true,
    }
)

const ProductsPCTechModel = model("productspctech", ProductsPCTECHSchema)
export default ProductsPCTechModel