
// const rpcProviderUrl =
//   "https://speedy-nodes-nyc.moralis.io/c4712e204e996cc82d1a770a/bsc/mainnet"; //Pending change it for avalanche testnet node

//this will be the address that will sign the minting of the token
const address = "0x8A9c12e06dae7b0AE77ABF31D19148ae8E5150CF"; // testnet avax

// rcp node provider
const rpcProviderUrl =
  "https://speedy-nodes-nyc.moralis.io/c4712e204e996cc82d1a770a/avalanche/testnet";

const KinrArtifact = require("../../web3/artifacts/KinrArtifact.js");
const { addressKinr, abi } = KinrArtifact;

const web3 = new Web3(rpcProviderUrl);



class BurnKinrService {
    constructor() {}
  
    burnFromKinr = async (amount, recipient) => {
        const networkId = await web3.eth.net.getId();
        const MatPoolContract = new web3.eth.Contract(abi, addressKinr[networkId]);
        const tx = await  MatPoolContract.methods.burn(amount, recipient );
      
        const gas = await tx.estimateGas({ from: address });
      
        const gasPrice = await web3.eth.getGasPrice(); 
        console.log(gas, gasPrice)
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
          console.log(error)
          return error;
        }
      
        console.log(`Transaction hash: ${receipt.transactionHash}`);
      
        return receipt.transactionHash;
      };

      testBurn(){
        console.log("testBurn")
      }
  }
  
  module.export = BurnKinrService;
  