//all the dependency used
var express = require('express')
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');

    //telling server to use the dependency
app.use(morgan('short'));
app.use(express.static('./subscriber'))
app.use(bodyParser.urlencoded({extended:false}))

        //post request to endpoint
 app.post('/https://api.sendgrid.com/v3/contactdb/recipients',(req,res)=>{
    console.log('data from form is extracted and posted');
    console.log("email:"+ req.body.email)
    const email= req.body.email;   
})

app.listen(3030,()=>{
    console.log("server is running sir at http://127.0.0.1:3030")
})
