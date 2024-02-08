import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProvider";
import { IUserRepository } from "../../repositories/IUserRepository";
import { ICreateUserRequestDTO } from "./CreateUserDto";

export class CreateUserUseCase {

    constructor (
        private UserRepository: IUserRepository,
        private MailProvider: IMailProvider
    ) {

    }

    async execute(data: ICreateUserRequestDTO) {
        const userAlreadyExists = await this.UserRepository.findByEmail(data.email)

        if (userAlreadyExists) throw new Error("User already exists.");

        const user = new User(data);

        await this.UserRepository.save(user);

        await this.MailProvider.sendMail({
            to: {
                nome: data.name,
                email: data.email
            },
            from: {
                nome: "umnomneteste",
                email: "umemailqualquer@gmail.com"
            },
            subject: "esse é um titulo",
            body: "esse é o corpo de envio o email"
        })
    }
}