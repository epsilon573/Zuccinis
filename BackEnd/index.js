const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');
const cors = require('cors');

// Setup Database

const connString = "mongodb+srv://sahil:helloworld@training.4phw8.mongodb.net/zuccini?retryWrites=true"
const mongoClient = mongodb.MongoClient;
const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'timothygreen573@gmail.com',
        pass: 'texkwjzbhknpeapk'
    }
})


mongoClient.connect(connString, {useUnifiedTopology: true} ,(err,client)=>{
    if(err) 
        return console.error(err);
    
    console.log('Connected to Database!')

    const db = client.db('zuccini');
    const users = db.collection('users');
    const category = db.collection('category');
    const orders = db.collection('orders');
    const products = db.collection('products');

    app.post('/addCategory',(req,res)=>{
        var myObj = {
            name: req.body.newCategory
        };
        
        console.log(myObj);

        category.insertOne(myObj, (err,res)=> {
            if(err) console.error(err);
            else console.log("Category Inserted");
        })
    });

    app.post('/addProduct',(req,res)=>{
        var myObj = {
            name: req.body.prodName,
            category: req.body.prodCategory,
            type: req.body.prodType,
            price: req.body.prodPrice,
            description: req.body.prodDescription,
        };
        
        console.log(myObj);

    
        products.insertOne(myObj, (err,res)=> {
            if(err) console.error(err);
            else console.log("Product Inserted");
        })
    });

    app.get('/getCategory',(req,res)=>{
        category.find().toArray().then(succ=>{
            if(succ) res.send(succ);
            else console.log("Couldn't Fulfill GetCategory Request!")
        })
    });

    app.get('/getProducts',(req,res)=>{
        products.find().toArray().then(succ=>{
            if(succ) res.send(succ);
            else console.log("Couldn't Fulfill GetProducts Request!")
        })
    });

});

// Setup Application

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json())
app.use(cors())

app.get('/sendMail',(req,res)=>{
    var mailOption = {
        from: 'timothygreen573@gmail.com',
        to: 'timothygreen581@gmail.com',
        subject: 'OTP Verification',
        text: 'Your OTP is '+123456+', Please dont share with anyone.'
    }

    transporter.sendMail(mailOption, function(error, succ){
        if(error){
            console.log(error)
        }else{
            console.log("Email Sent");
            res.send(succ);
        }
    })
});

// table booking mail

app.post('/sendMail1', (req,res) => {
           var contact = parseInt(req.body.contact);
           var Guest = parseInt(req.body.guest);
           var Comment = req.body.comment;
           var Date = parseInt(req.body.date);
           var Food = req.body.inputfood;
            var mailOption = {
                from: 'timothygreen573@gmail.com',
                to: req.body.email,
                subject: 'Table-Booking',
                text: 'Table Booking Successfull',
                html: '<h1>Your Table Booking is Successfull</h1><h2>No of Guest: '+Guest+'</h2><h2>Contact: '+contact+'</h2><h2>Food Type: '+Food+'</h2><h2>Comments: '+Comment+'</h2><h2>Date: '+Date+'</h2>'
               
            }

            transporter.sendMail(mailOption, function(error, sccc){
                if(error){
                    console.log(error)
                }else{
                    alert("Table Booking succesfull, Check your mail box for more info");
                    console.log("Email Sent");
                    res.send(succ);

                }
            })



        })
        




app.get('/',(req,res)=>{
    console.log("Hello");
});

app.listen(5000);