const express = require('express'); //now lets go ahead and write our server index.js...
const app     = express();
const admin   = require('./admin');

// used to serve static files from public directory
app.use(express.static('public'));

app.get('/open', (req,res) => res.send('Open Route!')); //this is NOT an aunthenticated route 

// verify token at the root route
app.get('/auth', function(req,res){ //then we are going to go ahead and add a route that that is going to be verified @ route '/auth'
    // read token from header
    const idToken = req.headers.authorization
    console.log('header:', idToken); //and we are going to echo that token header/auth to the console...

    // verify token // ** and you can see here a sample verification** taking that token that was passed in the authorization header...
    admin.auth().verifyIdToken(idToken)
        .then(function(decodedToken) {
            console.log('decodedToken:',decodedToken);
            res.send('Authentication Sucess!');
        }).catch(function(error) {
            console.log('error:', error);
            res.send('Authentication Fail!');
        });
})

app.listen(3000, () => {
    console.log('Running on port: 3000'); //then run the listener on port 3k
}) //terminal commands in autheticationofserverroutes direct => npm install express, npm install firebase-admin
//commmand => npm init -y to use default meta data to create package.json file if need be priorto commands aformentioned...