import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
    constructor (
        private createUserUseCase: CreateUserUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email, password } = request.body;

        try {
            this.createUserUseCase.execute({
                name, email, password
            })
            
            return response.status(200).send()
        } catch (error) {
            return response.status(500).json({
                message: error.message || "Erro inesperado."
            })
        }
    }
}