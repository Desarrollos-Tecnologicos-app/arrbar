// import { Request, response, Response } from "express"
// import {
// 	getMovies,
// 	getMovieSingle,
// 	insertMovie,
// 	updateMovie,
// 	deleteMovie,
// } from "../services/movie.service"

// import { handleHttp } from "../utils/error.handle"

// const Movies = async (req: Request, res: Response) => {
// 	try {
// 		const response = await getMovies()
// 		res.send(response)
// 	} catch (e) {
// 		handleHttp(res, "ERROR_GET_ITEMS")
// 	}
// }

// const MovieSingle = async ({ params }: Request, res: Response) => {
// 	try {
// 		const { id } = params
// 		const response = await getMovieSingle(id)
// 		const data = response ? response : "NOT_FOUND"
// 		res.send(data)
// 	} catch (e) {
// 		handleHttp(res, "ERROR_GET_ITEM")
// 	}
// }

// const MovieUpdate = async ({ params, body }: Request, res: Response) => {
// 	try {
// 		const { id } = params
// 		const response = await updateMovie(id, body)
// 		res.send(response)
// 	} catch (e) {
// 		handleHttp(res, "ERROR_UPDATE_ITEM")
// 	}
// }

// const MovieInsert = async ({ body }: Request, res: Response) => {
// 	const { title, genre, year, image } = body
// 	try {
// 		if (!title || !genre || !year || !image) {
// 			res.status(500)
// 			res.send("(title, genre, year, image) is required")
// 		} else {
// 			const responseItem = await insertMovie(body)
// 			res.send(responseItem)
// 		}
// 	} catch (e) {
// 		handleHttp(res, "ERROR_POST_ITEM", e)
// 	}
// }

// const MovieDelete = async ({ params }: Request, res: Response) => {
// 	try {
// 		const { id } = params
// 		const response = await deleteMovie(id)
// 		res.send(response)
// 	} catch (e) {
// 		handleHttp(res, "ERROR_DELETE_ITEM")
// 	}
// }

// export { Movies, MovieSingle, MovieInsert, MovieUpdate, MovieDelete }
