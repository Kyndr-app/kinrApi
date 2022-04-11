const Web3 = require("web3");
const KinrArtifact = require("../../web3/artifacts/KinrArtifact");
const { addressKinrArtifac, abi } = KinrArtifact;
const address = process.env.WALLET_ADDRESS;
const rpcProviderUrl = process.env.RPC_PROVIDER;

const web3 = new Web3(rpcProviderUrl);

class MintKinrService {
  constructor() {}

  mintKinr = async (amount, recipient) => {
    const networkId = await web3.eth.net.getId();
    const KinrCotract = new web3.eth.Contract(
      abi,
      addressKinrArtifac[networkId]
    );
    console.log(amount)
    const tx = await KinrCotract.methods.mint(amount , recipient);

    const gas = await tx.estimateGas({ from: address });

    const gasPrice = await web3.eth.getGasPrice();

    const data = tx.encodeABI();
    const nonce = await web3.eth.getTransactionCount(address);
    const signedTxErc20 = await web3.eth.accounts.signTransaction(
      {
        to: KinrCotract.options.address,
        data,
        gas,
        gasPrice,
        nonce,
        chainId: networkId,
      },
      process.env.PRIVAYE_KEY_WALLET
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

module.exports = MintKinrService;
