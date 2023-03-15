const Company = require('../../model/model')

class GetBalanceService {
    async execute({firstName, lastName, cardNumber, pin}){
        try {
            const data = await Company.findOne({
                'user.firstName':firstName, 
                'user.lastName':lastName, 
                'account.cardNumber':cardNumber, 
                'account.pin':pin
            })
            console.log('$$$', data.account.balance)
            return data.account.balance
        } catch (error) {
            throw new Error(error.message)
        }
    }
}

module.exports={getBalanceService: new GetBalanceService()}