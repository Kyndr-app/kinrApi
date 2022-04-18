var axios = require("axios");
class WithdrawUpiService {
  constructor() {}

  async withdraw() {
    // pendingh create a marchant pay with kotak

    const data = JSON.stringify({
      accountholdername: "merchant name",
      accrefnumber: "4211172426",
      acctype: "savings",
      amount: "1.00",
      approvalRef: "123456",
      customerRefid: "4444444",
      devicedetails: {
        app: "string",
        capability: "1111",
        gcmid: "string",
        geocode: "12.02,17.03",
        id: "string",
        ip: "127.0.0.1",
        location: "string",
        mobile: "919397123108",
        os: "Android",
        type: "",
      },
      ifsc: "KKBK0000646",
      mcc: "1520",
      merchaentrefid: "merm0001",
      mobilenumber: "919397123108",
      payeevpa: "customervpa@kotak",
      payervpa: "merchantvpa@kotak",
      remarks: "Merchant Prepay Test",
      txnid: "KMBMTEST310118124749000000010000002",
    });

    const res = await axios.post("https://httpbin.org/post", data, {
      headers: {
        Authorization: "Bearer 0e70aae6-dc8f-40fd-87cb-e78029be3f25",
        "Content-Type": "application/json",
      },
    });

    console.log(JSON.stringify(res.data).code);

    return JSON.stringify(res.data);
  }
}

module.exports = WithdrawUpiService;
