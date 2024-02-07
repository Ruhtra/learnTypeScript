import { CreatePixController } from "./CreatePixController";
import { CreatePixUseCase } from "./CreatePixUseCase";


const createPixUseCase = new CreatePixUseCase()

const createPixController = new CreatePixController(createPixUseCase)

export { createPixUseCase, createPixController }