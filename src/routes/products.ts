import { Request, Response, Router } from "express"

import {
	productsPcTech, productsSYSCOM, productSingle, productByBrand
} from "../controllers/products.controller"

const router = Router()

router.get("/", productsPcTech)
router.post("/search", productsSYSCOM)
router.post('/productbyid', productSingle )
router.get('/brand/:brand/:page', productByBrand)

export { router }