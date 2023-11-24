import { Request, Response, Router } from "express"

import {
	Categories,
    subCatergories,
} from "../controllers/categories.controller"

const router = Router()

router.get("/", Categories)

router.get(
	"/:id",
	subCatergories
)

export { router }