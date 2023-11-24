// import { Request, Response } from "express"
// import {
// 	getLicenses,
// 	getLicenseSingle,
// 	insertLicense,
// 	updateLicense,
// 	deleteLicense,
// } from "../services/license.service"

// import { handleHttp } from "../utils/error.handle"
// import { License } from "../interfaces"

// const Licenses = async (req: Request, res: Response) => {
// 	try {
// 		const response = await getLicenses()
// 		res.send(response)
// 	} catch (e) {
// 		handleHttp(res, "ERROR_GET_ITEMS")
// 	}
// }

// const LicenseSingle = async ({ params }: Request, res: Response) => {
// 	try {
// 		const { id } = params
// 		const response = await getLicenseSingle(id)
// 		const data = response ? response : "NOT_FOUND"
// 		res.send(data)
// 	} catch (e) {
// 		handleHttp(res, "ERROR_GET_ITEM")
// 	}
// }

// const LicenseUpdate = async ({ params, body }: Request, res: Response) => {
// 	try {
// 		const { id } = params
// 		const response = await updateLicense(id, body)
// 		res.send(response)
// 	} catch (e) {
// 		handleHttp(res, "ERROR_UPDATE_ITEM")
// 	}
// }

// const LicenseInsert = async ({ body }: Request, res: Response) => {
// 	body.isActive = true
// 	body.createdBy = body.user
// 	body.dateActivated = new Date
// 	const { daysDemo, price, isActive, createdBy, dateActivated, name, quantityLicenses } = body as License
// 	try {
// 		if (!daysDemo || !price || !isActive || !createdBy || !dateActivated || !name || !quantityLicenses) {
// 			res.status(500)
// 			res.send("(title, genre, year, image) is required")
// 		} else {
// 			const responseItem = await insertLicense(body)
// 			res.send(responseItem)
// 		}
// 	} catch (e) {
// 		handleHttp(res, "ERROR_POST_ITEM", e)
// 	}
// }

// const LicenseDelete = async ({ params }: Request, res: Response) => {
// 	try {
// 		const { id } = params
// 		const response = await deleteLicense(id)
// 		res.send(response)
// 	} catch (e) {
// 		handleHttp(res, "ERROR_DELETE_ITEM")
// 	}
// }

// export { Licenses, LicenseSingle, LicenseInsert, LicenseUpdate, LicenseDelete }
