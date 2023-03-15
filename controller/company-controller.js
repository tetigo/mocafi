const {getBalanceService} = require('../services/company/getBalance')


class CompanyController{
    getBalance= async (req,res)=>{
        const {firstName, lastName, cardNumber, pin} = req.body
        const result = await getBalanceService.execute({firstName, lastName, cardNumber, pin})
        return res.status(200).json(result)
        
    }

}

module.exports = {companyController: new CompanyController()}
