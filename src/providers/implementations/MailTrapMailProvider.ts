import { IMailProvider, IMessage } from "../IMailProvider";

class TransporterSimulation {
    async sendMail(message: IMessage): Promise<void> {
        const delay = (ms: number) => new Promise<void>(resolve => setTimeout(resolve, ms));
        await delay(2000);

        console.log(`Email enviado para: ${message.to}\nAssunto: ${message.subject}\nCorpo: ${message.body}`);
    }
}


export class MailTrapMailProvider implements IMailProvider {
    private transporter: TransporterSimulation

    constructor() {
        this.transporter = new TransporterSimulation();
    }

    async sendMail(message: IMessage): Promise<void> {
        await this.transporter.sendMail({
            to: {
                nome: message.to.nome,
                email: message.to.email
            },
            from: {
                nome: message.from.nome,
                email: message.from.email,
            },
            subject: message.subject,
            body: message.body
        });
    }
}