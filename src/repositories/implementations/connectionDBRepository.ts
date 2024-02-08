import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";

export class connectionDbRespository implements IUserRepository {


    private databse: User[] = []

    async findByEmail(email: string): Promise<User> {
        const res: User = this.databse.find(e => e.email == email)

        return res;
    }

    async save(user: User): Promise<void> {
        this.databse.push(user)
    }
}