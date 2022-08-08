const braintree = require("braintree");
const dotenv = require('dotenv');
dotenv.config({ path: 'server/.env' });

const gateway = new braintree.BraintreeGateway({
  environment: braintree.Environment.Sandbox,
  merchantId: process.env.MERCHANTID,
  publicKey: process.env.PUBLICKEY,
  privateKey: process.env.PRIVATEKEY
});

exports.getToken = async (req, res) => {
  try {
    gateway.clientToken.generate({}, (err, response) => {
      if (response.success) {
        res.send({"token": response.clientToken});
      }
    });
  } catch(error) {
    res.status(400).send(error.message)
  }
}

exports.checkout = async (req, res, next) => {

  const nonceFromTheClient = req.body;

  gateway.transaction.sale({
    amount: nonceFromTheClient.chargeAmount,
    paymentMethodNonce: nonceFromTheClient.nonce,
    options: {
      submitForSettlement: true
    }
  }).then(result => {
    res.send(result);
  });

}
