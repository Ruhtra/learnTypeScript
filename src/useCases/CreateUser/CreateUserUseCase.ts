import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/IUserRepository";
import { ICreateUserRequestDTO } from "./CreateUserDto";

export class CreateUserUseCase {

    constructor (
        private UserRepository: IUserRepository
    ) {

    }

    async execute(data: ICreateUserRequestDTO) {
        const userAlreadyExists = await this.UserRepository.findByEmail(data.email)

        if (userAlreadyExists) throw new Error("User already exists.");

        const user = new User(data);

        await this.UserRepository.save(user);
    }
}