import { Request, Response, Router } from "express";
import { createUserController } from "./useCases/CreateUser/Index";
import { createPixController } from "./useCases/GeneratePix/Index";

const router = Router()

router.post("/users", (request, response) => {
    return createUserController.handle(request, response)
})

router.post("/createPixBoleto", (request, response) => {
    return createPixController.handle(request, response)
})

export { router }