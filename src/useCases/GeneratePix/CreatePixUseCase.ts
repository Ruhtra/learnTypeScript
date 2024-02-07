import EfiPay, { EfiCredentials } from 'sdk-typescript-apis-efi';

const options: EfiCredentials = {
    sandbox: false,
    client_id: 'Client_Id_537af5a77b57be1477efd0adb15cf3a9bd97e4cb',
    client_secret: 'Client_Secret_d310196575aef474f4dc138e803312ec54aac2fa',
    pix_cert: '../../producao-546988-learn.p12',
};
const optionsTest: EfiCredentials = {
    sandbox: true,
    client_id: 'Client_Id_fb5e01edee0afec7e68c4ecc8783aabae9687731',
    client_secret: 'Client_Secret_37d45d121d3c5d588f46f67638cf1dfd42f99312',
    pix_cert: '../../producao-546988-learn.p12',
};

export class CreatePixUseCase {
    constructor () {
        
    }
    async execute() {
        const efipay =  new EfiPay(optionsTest);
        
        let body = {
            payment: {
                banking_billet: {
                    expire_at: '2024-09-20',
                    customer: {
                        name: 'Kawan Arthur',
                        email: 'kawanarthurskate@gmail.com',
                        cpf: '70119006405',
                        birth: '2003-01-06',
                        phone_number: '84999221557',
                    },
                },
            },
        
            items: [
                {
                    name: 'Product 1',
                    value: 500,
                    amount: 1,
                },
            ],
            shippings: [
                {
                    name: 'Default Shipping Cost',
                    value: 100,
                },
            ],
        }
        
        return await efipay.createOneStepCharge([], body)
    }
    async executeLink() {
        const efipay =  new EfiPay(optionsTest  );

        let body = {
            items: [
                {
                    name: 'Product 1',
                    value: 1000,
                    amount: 2,
                },
            ],
            shippings: [
                {
                    name: 'Default Shipping Cost',
                    value: 100,
                },
            ],
        }
        
        var res = await efipay.createCharge({}, body)

        var id = res.data.charge_id


        let params = {
            id: id,
        }
        
        let bodynew = {
            billet_discount: 1,
            card_discount: 1,
            message: 'new message',
            expire_at: '2024-02-08',
            request_delivery_address: false,
            payment_method: 'all',
        }
        
        return await efipay.defineLinkPayMethod(params, bodynew)
    }
    
}