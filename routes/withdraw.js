const Web3 = require("web3");
const axios = require('axios');
const dotenv = require("dotenv");
dotenv.config();

const rpcProviderUrl =
  "https://speedy-nodes-nyc.moralis.io/c4712e204e996cc82d1a770a/bsc/mainnet"; //Pending change it for avalanche testnet node

const KinrArtifact = require("../web3/artifacts/KinrArtifact.js");



const express = require("express");

const router = express.Router();

router.post("/", async (req, res) => {


    var data = JSON.stringify({
              "aggregatorVPA": "test@kotak",
              "amount": "10.00",
              "customerId": "91123456789",
              "deviceDetails":
              {
                  "mobile": "919179440999",
                  "app": "test.upi"
              },
              "expiry": "18000",
              "merchantReferenceCode": "test001",
              "orderId": "15001511",
              "payerVpa": "testuat@kotak",
              "referenceId": "804014035129",
              "remarks": "test",
              "timeStamp": "09-02-2017 11:05:15",
              "txnId": "KMBMCCAVLHCBBBZ9PGLAAHCC4BXJAK9R002",
              "debitAccount": "0412101009000309",
              "ifsc": "KKBK0123456",
              "refUrl": "https://testing.com"
          })

          var config = {
            method: POST,
            url: "https://apigwuat.kotak.com:8443/upi/Merchant/Collect",
            headers: { 
              'Authorization': 'Bearer 57438b7c-0fa9-497b-bf87-22434b333998',
              'Content-Type': 'application/json'
            },
            data : data
          };
          
        axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
          })
          .catch(function (error) {
            console.log(error);
          });

    res.json({  });
});

module.exports = router;
