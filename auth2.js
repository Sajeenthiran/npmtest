const express = require('express');
const app = express();
const OAuthClient = require('intuit-oauth');
let oauthClient = null;
const request = require('request');
const openUrl = require("openurl");


app.get('/authUri',  function(req,res) {
    oauthClient = new OAuthClient({
        clientId: 'ABjkkj5yjXph7zaRbhFB9trRfXHEkZSzYC8Vss1efBGdrWA1T2',
        clientSecret: 'EMKVlGETlCTcq77K6zOSBVpiS8dpMEeok3LweKa2',
        environment: 'Sandbox',
        redirectUri: 'http://localhost:3000/callback'
    });

    const authUri = oauthClient.authorizeUri({scope:[OAuthClient.scopes.Accounting],state:'intuit-test'});
    console.log("///++  authUri ",authUri+ "  ++///");

//openUrl.open(authUri);

    //res.send(authUri);
});


app.get('/callback', function(req, res) {
    console.log("callback*******************************************************************");
    oauthClient.createToken(req.url)
       .then(function(authResponse) {
             oauth2_token_json = JSON.stringify(authResponse.getJson(), null,2);
           console.log(authID);
           console.log("auth2 token ",oauth2_token_json);
         })
        .catch(function(e) {
             console.error(e);
         });

    res.send('Connected');

});

app.listen(3000);

