var apikeys = require('./apikeys.js');
// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console

//  Values imported from apikeys
//  Swap the placeholder values for accountSid, authToken, with your personal Twilio credentials
//  apikeys.from is the twilio number you purchased
//  apikeys.to is the number you will send a message to
const accountSid = apikeys.accountSid
const authToken = apikeys.authToken;
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'tested using variables from env file',
     from: apikeys.from,
     to: apikeys.to
   })
  .then(message => console.log(message.sid))
  .done();
