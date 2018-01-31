/*******************************************
 *    Hamster Wheel 
 *      THE FRONT END
 *  v. 1.0.0 Beta
 ******************************************/

 const express = require('express');
 const bodyParser = require('body-parser');
 //const pug = require('pug');
 require('dotenv').config();

 const app = express();
 
 //Activate Pug
 app.set('view engine', 'pug');

 //Add bodyParser to App to get post data
app.use(bodyParser.urlencoded({extended: true}));

// Set up a static public directory
app.use(express.static('public'));

// Load Routes
require('./router.js')(app)

// Listen on port 8180
app.listen(process.env.PORT, function () {
    console.log('Hamster Wheel is running on port ',process.env.PORT);
   });