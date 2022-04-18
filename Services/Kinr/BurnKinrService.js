const Web3 = require("web3");
const KinrArtifact = require("../../web3/artifacts/KinrArtifact");
const { addressKinrArtifac, abi } = KinrArtifact;
const address = process.env.WALLET_ADDRESS;
const rpcProviderUrl = process.env.RPC_PROVIDER;


const web3 = new Web3(rpcProviderUrl);

class BurnKinrService {
  constructor() {}

  burnFromKinr = async (amount, recipient) => {
    const networkId = await web3.eth.net.getId();
    const MatPoolContract = new web3.eth.Contract(abi, addressKinr[networkId]);
    const tx = await MatPoolContract.methods.burnFrom(recipient, amount);

    const gas = await tx.estimateGas({ from: address });

    const gasPrice = await web3.eth.getGasPrice();
    console.log(gas, gasPrice);
    const data = tx.encodeABI();
    const nonce = await web3.eth.getTransactionCount(address);
    const signedTxErc20 = await web3.eth.accounts.signTransaction(
      {
        to: MatPoolContract.options.address,
        data,
        gas,
        gasPrice,
        nonce,
        chainId: networkId,
      },
      process.env.PRIVAYE_KEY_BCS //private key froms signer wallet
    );
    let receipt;
    try {
      receipt = await web3.eth.sendSignedTransaction(
        signedTxErc20.rawTransaction
      );
    } catch (error) {
      console.log(error);
      return error;
    }

    console.log(`Transaction hash: ${receipt.transactionHash}`);

    return receipt.transactionHash;
  };


}

module.exports = BurnKinrService;
