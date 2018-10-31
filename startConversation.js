// var apikeys = require('./apikeys.js');
// // Download the helper library from https://www.twilio.com/docs/node/install
// // Your Account Sid and Auth Token from twilio.com/console
//
// //  Values imported from apikeys
// //  Swap the placeholder values for accountSid, authToken, with your personal Twilio credentials
// //  apikeys.from is the twilio number you purchased
// //  apikeys.to is the number you will send a message to
// const accountSid = apikeys.accountSid
// const authToken = apikeys.authToken;
// const client = require('twilio')(accountSid, authToken);
//
//
// conversation()
//
// app.post('/smsPurchase2', (req, res) => {
// 	const twiml = new MessagingResponse();
// 	var purchaseItemName = req.body.itemName;
//   var phoneNumber = req.body.phoneNumber
//
// 	let message = ('Thank you for your purchase of ' + purchaseItemName + '. Your card has been saved for future purchases. To purchase an item, respond \'Buy\'.');
//
//   client.messages
//     .create({
//        body: message,
//        from: apikeys.from,
//        to: req.phoneNumber    ///***********************
//      })
//     .then(message => console.log(message.sid))
//     .done();
//
//
// 	res.writeHead(200, {'Content-Type': 'text/xml'});
// 	// res.end(twiml.toString());
// });
