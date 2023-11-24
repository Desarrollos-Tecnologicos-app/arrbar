import { Schema, Types, model, Model } from "mongoose"
import { IInventory } from "../interfaces"

const InventorySchema = new Schema<IInventory>(
    {
        almacen_id: {
            type: Number
        },
        cantidad: {
            type: Number,
        },
        almacen: {
            type: String
        }
    },
    {
        versionKey: false,
        timestamps: true,
    }
)

const InventoryModel = model("inventario", InventorySchema)
export default InventoryModel