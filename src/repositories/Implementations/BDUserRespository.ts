import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";

export class BDUserRepository implements IUserRepository {
    private banco: User[] = [];

    async findByEmail(email: string): Promise<User> {
        const usuario = this.banco.find(user => user.email == email);
        return usuario;
    }
    
    async save(user: User): Promise<void> {
        this.banco.push(user)
    }
}