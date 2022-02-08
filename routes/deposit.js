const Web3 = require("web3");
const axios = require("axios");
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

const mintKinr = async (amount, recipient) => {
  const networkId = await web3.eth.net.getId();
  const MatPoolContract = new web3.eth.Contract(abi, addressKinr[networkId]);
  //
  const tx = await  MatPoolContract.methods.mint(amount, recipient );

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

router.post("/", async (req, res) => {
  // const amount = req.headers['amount'];
  // address
  //amount, customerId , payerVpa, remarks, txnId, aggregatorVPA, expiry, timeStamp, merchantReferenceCode, deviceDetails
  const data = JSON.stringify({
    aggregatorVPA: "test@kotak",
    amount: "10.00",
    customerId: "91123456789",
    deviceDetails: {
      mobile: "919179440999",
      app: "test.upi",
    },
    expiry: "18000",
    merchantReferenceCode: "test001",
    orderId: "15001511",
    payerVpa: "testuat@kotak",
    referenceId: "804014035129",
    remarks: "test",
    timeStamp: "09-02-2017 11:05:15",
    txnId: "KMBMCCAVLHCBBBZ9PGLAAHCC4BXJAK9R002",
    debitAccount: "0412101009000309",
    ifsc: "KKBK0123456",
    refUrl: "https://testing.com",
  });

  var config = {
    method: POST,
    url: "https://apigwuat.kotak.com:8443/upi/Merchant/Collect",
    headers: {
      Authorization: "Bearer 57438b7c-0fa9-497b-bf87-22434b333998",
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));

      if (response.data) {
        const mintResult = await mintKinr();
        res.json({ mintResult });
      } else {
        console.log(JSON.stringify(response.data));
      }
    })
    .catch(function (error) {
      console.log(error);
    });
});

module.exports = router;
