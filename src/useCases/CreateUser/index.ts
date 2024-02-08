import { MailTrapMailProvider } from "../../providers/implementations/MailTrapMailProvider";
import { connectionDbRespository } from "../../repositories/implementations/connectionDBRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailTrapMailProvider = new MailTrapMailProvider()
const ConnectionDbRespository = new connectionDbRespository()

const createUserUseCase = new CreateUserUseCase(
    ConnectionDbRespository,
    mailTrapMailProvider
)

const createUserController = new CreateUserController(createUserUseCase)

export {
    createUserUseCase,
    createUserController
}