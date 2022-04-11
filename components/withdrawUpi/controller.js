

const BurnKinrService = require('../../services/Kinr/BurnKinrService');
const WithdrawUpiService = require('../../services/Upi/WithdrawUpiService');
const withdrawService = new WithdrawUpiService();
const burnService = new BurnKinrService();

async function withdraw(){
    return await withdrawService.deposit();
}

async function burnKirn(amount, recipient){
    return await burnService.burnFromKinr(amount, recipient);
}

module.exports = {
    withdraw,
    burnKirn
}