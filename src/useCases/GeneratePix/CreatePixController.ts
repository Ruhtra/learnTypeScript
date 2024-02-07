import { Request, Response } from "express";
import { CreatePixUseCase } from "./CreatePixUseCase";

export class CreatePixController {
    constructor (
        private createPixUseCase: CreatePixUseCase
    ) {}

    async handle (request: Request, response: Response): Promise<Response> {

        try {
            // var res = await this.createPixUseCase.execute()
            var res = await this.createPixUseCase.executeLink()

            console.log(res)

            return response.status(200).json({message: "tudo ok"})
        } catch (err) {
            console.log(err)
            return response.status(500).json({message: "Houve um erro na hora de efeturar o pagamento: "+ err})
        }

    }
}