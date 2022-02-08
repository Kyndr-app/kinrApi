const Web3 = require("web3");
const axios = require('axios');
const dotenv = require("dotenv");
dotenv.config();

const dotenv = require("dotenv");
dotenv.config();

const rpcProviderUrl =
  "https://speedy-nodes-nyc.moralis.io/c4712e204e996cc82d1a770a/bsc/mainnet"; //Pending change it for avalanche testnet node

//this will be the address that will sign the minting of the token
const address = 
"";
// "0x8A9c12e06dae7b0AE77ABF31D19148ae8E5150CF"; 
const dotenv = require("dotenv");
dotenv.config();
// rcp node provider
const rpcProviderUrl = 
"";
// "https://speedy-nodes-nyc.moralis.io/c4712e204e996cc82d1a770a/bsc/testnet";

const KinrArtifact = require("../web3/artifacts/KinrArtifact.js");
const { addressKinr, abi } = KinrArtifact;

const web3 = new Web3(rpcProviderUrl);


const express = require("express");

const router = express.Router();

const burnFromKinr = async (amount, recipient) => {
  const networkId = await web3.eth.net.getId();
  const MatPoolContract = new web3.eth.Contract(abi, addressKinr[networkId]);
  //
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



const express = require("express");

const router = express.Router();

router.post("/", async (req, res) => {
  var axios = require('axios');
  var data = JSON.stringify({                    
                "accountholdername": "merchant name",
                "accrefnumber": "4211172426",
                "acctype": "savings",
                "amount": "1.00",
                "approvalRef": "123456",
                "customerRefid": "4444444",
                "devicedetails": {
                "app": "string",
                "capability": "1111",
                "gcmid": "string",
                "geocode": "12.02,17.03",
                "id": "string",
                "ip": "127.0.0.1",
                "location": "string",
                "mobile": "919397123108",
                "os": "Android",
                "type": ""
                },
                "ifsc": "KKBK0000646",
                "mcc": "1520",
                "merchaentrefid": "merm0001",
                "mobilenumber": "919397123108",
                "payeevpa": "customervpa@kotak",
                "payervpa": "merchantvpa@kotak",
                "remarks": "Merchant Prepay Test",
                "txnid":
                "KMBMTEST310118124749000000010000002"
            });

            var config = {
              method: POST,
              url:  "https://apigwuat.kotak.com:8443/upi/Merchant/Pay",
              headers: { 
                'Authorization': 'Bearer ',
                'Content-Type': 'application/json'
              },
              data : data
            };
            
            axios(config)
            .then(function (response) {
              console.log(JSON.stringify(response.data));
              const data = response.data;
              if (response.data) {
                const mintResult = await mintKinr();
                res.json({ mintResult });
              } else {
                res.json({ data });
              }
            })
            .catch(function (error) {
              res.json({ error });
            });
  
});

module.exports = router;
