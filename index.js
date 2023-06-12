const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser');


//import to be able to use the routes

const routes = require('./routes/api')

const app = express();

// connect to db 

mongoose.connect('mongodb://127.0.0.1:27017/Node_ninja_api');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use('/api/',routes);

//error handle

app.use(function(err,req,res,next){
    // console.log(err);
    res.status(422).send({error: err.message})
});


app.listen(process.env.port || 4300,function(){
    console.log("web app is ready running")
    console.log("Listening at http://127.0.0.1:4300")
})
