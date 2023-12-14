import { Request, Response, Router } from "express"

import {
    filterByProvider
} from '../controllers/make.orders.controller'

const router = Router()

// router.post("/", filterByProvider)

export { router }