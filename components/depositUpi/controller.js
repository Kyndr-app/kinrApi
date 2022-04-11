const MintKinrService = require("../../services/Kinr/MintKinrService");
const DepositUpiService = require("../../services/Upi/DepositUpiService");
const depositService = new DepositUpiService();
const mintService = new MintKinrService();

async function deposit(amount) {
  return await depositService.deposit(amount);
}

async function mintKirn(amount, recipient) {
  return await mintService.mintKinr(amount, recipient);
}


module.exports = {
  deposit,
  mintKirn
};
