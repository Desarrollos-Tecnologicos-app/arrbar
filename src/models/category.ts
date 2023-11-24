import { Schema, Types, model, Model } from "mongoose"
import { Category } from "../interfaces"

const CategorySchema = new Schema<Category>(
	{
		id: {
			required: false,
			type: Number
		},
		name: {
			required: true,
			type: String,
		},
		isActive: {
			type: Boolean,
			required: true,
			default: true
		},
		level: {
			type: Number,
			min: 1,
			max: 3,
		}
	},
	{
		versionKey: false,
		timestamps: true,
	}
)

const CategoryModel = model("Categories", CategorySchema)
export default CategoryModel