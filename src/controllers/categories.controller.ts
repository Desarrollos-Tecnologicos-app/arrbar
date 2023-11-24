import { Request, response, Response } from "express"
import {
	getGeneralCategories,
    getSubCategoriesById
} from "../services/categories.service"

import { handleHttp } from "../utils/error.handle"

const Categories = async (req: Request, res: Response) => {
	try {
		const response = await getGeneralCategories()
		res.send(response)
	} catch (e) {
		handleHttp(res, "ERROR_GET_ITEMS")
	}
}

const subCatergories = async ({ params }: Request, res: Response) => {
	let { id } = params
	try {
		const response = await getSubCategoriesById(Number(+id))
		const data = response ? response : "NOT_FOUND"
		res.send(data)
	} catch (e) {
		handleHttp(res, "ERROR_GET_ITEM")
	}
}

export { Categories, subCatergories }
