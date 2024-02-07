import { BDUserRepository } from "../../repositories/Implementations/BDUserRespository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const bDUserRepository = new BDUserRepository()

const createUserUseCase: CreateUserUseCase = new CreateUserUseCase(bDUserRepository)

const createUserController : CreateUserController = new CreateUserController(createUserUseCase)

export { createUserUseCase,  createUserController}