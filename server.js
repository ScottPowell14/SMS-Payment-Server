const http = require('http');
const express = require('express');
const app = express();

var apikeys = require('./apikeys.js');
const accountSid = apikeys.accountSid
const authToken = apikeys.authToken;
const client = require('twilio')(accountSid, authToken);
const MessagingResponse = require('twilio').twiml.MessagingResponse;

app.post('/smsPurchase', (req, res) => {

	const twiml = new MessagingResponse();

	var purchaseItemName = req.itemName;

	twiml.message('Thank you for your purchase of ' + purchaseItemName + '. Your card has been saved for future purchases. To purchase an item, respond \'Buy\'.');

	res.writeHead(200, {'Content-Type': 'text/xml'});
	res.end(twiml.toString());
});

app.post('/smsResponse', (req, res) => {
  const twiml = new MessagingResponse();

  // twiml.message('The Robots are coming! Head for the hills!');

  if (req.body.Body == 'Hello') {
    twiml.message('Hi there, welcome to Magento-Storefront! Some responses you may want to know are \'Buy\', \'Pass\', \'Love\', and \'Hate\'');
  } else if(req.body.Body == 'bye') {
    twiml.message('Goodbye');
  } else if (req.body.Body == 'Buy') {
  	twiml.message('We will use your credit card ending in 0987 for the order. Please confirm by responding \'Confirm\' or \'Pass\'');
  } else if (req.body.Body == 'Confirm') {
  	twiml.message('Order confirmed! Your credit card ending in 0987 will be charged $xx.00 and your item will be shipped your address.');
  }else if (req.body.Body == 'Pass') {
  	twiml.message('That may not have been for you, but we will keep sending you styles you may like!');
  } else if (req.body.Body == 'Unsubscribe') {
  	twiml.message('Sorry to see you go! If you would like, respond with why you are leaving.');
  } else if (req.body.Body == 'Love') {
  	twiml.message('Glad you like it! Would you like to purchase? Respond with \'Buy\' or \'Pass\'');
  } else if (req.body.Body == 'Hate') {
  	twiml.message('That may not have been for you, but we will keep sending you styles you may like!');
  } else {
    twiml.message('Not sure I understand what you mean. Some responses you may want to know are \'Buy\', \'Pass\', \'Love\', and \'Hate\'');
  }

  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});

http.createServer(app).listen(1337, () => {
  console.log('Express server listening on port 1337');
});
