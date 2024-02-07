import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { ICreateUserRequestDTO } from "./CreateUserDto";

export class CreateUserController {
    constructor (
        private createUserUseCase: CreateUserUseCase
    ) {}

    async handle(request : Request, response: Response): Promise<Response> {

        const user: ICreateUserRequestDTO  =  request.body.user;


        await this.createUserUseCase.execute(user)

        return response.status(200).json({message: "Tudo okay para o teste"})

    }

}