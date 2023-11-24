// import { Request, Response } from "express"
// import {
// 	registerNewUser,
// 	loginUser,
// 	profileUser,
// } from "../services/auth.service"

// const registerCtrl = async ({ body }: Request, res: Response) => {
// 	const { email, password, name } = body
// 	if (!email || !password || !name) {
// 		res.status(500)
// 		res.send("email, password, name is required")
// 	} else {
// 		const responseUser = await registerNewUser(body)
// 		res.send(responseUser)
// 	}
// }

// const loginCtrl = async ({ body }: Request, res: Response) => {
// 	const { email, password } = body
// 	if (!email || !password) {
// 		res.status(500)
// 		res.send("email, password is required")
// 	} else {
// 		const responseUser = await loginUser({ email, password })

// 		if (responseUser === "PASSWORD_INCORRECT") {
// 			res.status(403)
// 			res.send(responseUser)
// 		} else {
// 			res.send(responseUser)
// 		}
// 	}
// }

// const profileCtrl = async ({ body }: Request, res: Response) => {
// 	const { _id } = body
// 	const responseUser = await profileUser(_id)
// 	if (responseUser === "NOT_FOUND_USER") {
// 		res.status(403)
// 		res.send(responseUser)
// 	} else {
// 		res.send(responseUser)
// 	}
// }

// export { loginCtrl, registerCtrl, profileCtrl }
