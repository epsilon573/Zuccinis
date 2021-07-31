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

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

mongoClient.connect(connString, {useUnifiedTopology: true} ,(err,client)=>{
    if(err) 
        return console.error(err);
    
    console.log('Connected to Database!')

    const db = client.db('zuccini');
    const users = db.collection('users');
    const category = db.collection('category');
    const orders = db.collection('orders');
    const products = db.collection('products');
    const admins = db.collection('admins');

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

    app.post('/Login',(req,res)=>{
        var myObj = {
            email: req.body.userEmail,
            password: req.body.userPassword
        };
        
        console.log(myObj);

        users.findOne({ email : req.body.userEmail }, (err,doc)=> {
            if(err) console.error(err);
            else
            {
                if(doc)
                {
                    if(doc.password === req.body.userPassword)
                        res.send('User Found')
                    else 
                        res.send('Wrong Password')
                }
                else
                    res.send('This Email is not registered')
            }
        })
    });

    app.post('/Signup',(req,res)=>{
        var myObj = {
            name: req.body.userName,
            email: req.body.userEmail,
            password: req.body.userPassword,
            contact: req.body.userContact
        };
        
        console.log(myObj);

        users.findOne({ email : req.body.userEmail }, (err,doc)=> {
            if(err) res.send('Some Error Occured');
            else
            {
                if(doc)
                {
                    res.send('Email is already registered')
                }
                else
                {
                    users.insertOne( myObj, (err)=> {
                        if(err)
                            res.send('Some Error Occured')
                        else
                            res.send('Registered')
                    })
                }
            }
        })
    });

    app.post('/adminLogin',(req,res)=>{
        var myObj = {
            email: req.body.adminEmail,
            password: req.body.adminPassword
        };
        
        console.log(myObj);

        admins.findOne({ email : req.body.adminEmail }, (err,doc)=> {
            if(err) console.error(err);
            else
            {
                if(doc)
                {
                    if(doc.password === req.body.adminPassword)
                        res.send('User Found')
                    else 
                        res.send('Wrong Password')
                }
                else
                    res.send('This Email is not registered')
            }
        })
    });

    app.post('/removeUser',(req,res)=>{
        var myObj = {
            email: req.body.userEmail,
        };
        
        console.log(myObj);

        users.deleteOne(myObj, (err,doc)=> {
            if(err) console.error(err);
            else
            {
                if(doc)
                {
                   res.send("User Removed")
                }
                else
                    res.send('This Email is not registered')
            }
        })
    });

    app.get('/getCategory',(req,res)=>{
        console.log("Fetching Categories");
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

    app.get('/getUsers',(req,res)=>{
        console.log("Fetching Users");
        users.find().toArray().then(succ=>{
            if(succ) res.send(succ);
            else console.log("Couldn't Fulfill GetUsers Request!")
        })
    });

    app.post('/sendOTP',(req,res)=>{
        var myObj = {
            email: req.body.userEmail
        };

        users.findOne(myObj, (err,doc)=>{
            if(err) console.error(err);
            else
            {
                if(doc)
                {
                    var otp = getRandomInt(100000,999999);
                    var mailOption = {
                        from: 'timothygreen573@gmail.com',
                        to: doc.email,
                        subject: 'OTP Verification',
                        text: 'Your OTP to reset password is '+ otp
                    }
                
                    transporter.sendMail(mailOption, function(error, succ){
                        if(error){
                            console.log(error)
                        }else{
                            console.log("Email Sent");
                            res.send(succ);
                        }
                    })

                    users.updateOne(myObj, {
                        $set:{
                            otp: otp
                        } }, (err,doc)=>{
                            if(err) console.error(err);
                        }
                    );

                    res.send("User Found");
                }
                else
                {
                    res.send("Email not registered");
                }
            }
        })
    });

    app.post('/newPass',(req,res)=>{
        var myObj = {
            email: req.body.userEmail,
        };
        
        users.findOne(myObj, (err,doc)=>{
            if(err) console.error(err);
            else
            {
                if(doc)
                {
                    var otp = getRandomInt(100000,999999);
                    
                    if(doc.otp.toString() === req.body.userOTP)
                    {
                        users.updateOne(myObj, {
                            $set:{
                                otp: otp,
                                password: req.body.userPassword
                            } }, (err,doc)=>{
                                if(err) console.error(err);
                                else
                                {
                                    res.send("Password Reset");
                                }
                            }
                        );
                    }
                    else
                    {
                        res.send("Invalid OTP")
                    }
                }
                else
                {
                    res.send("Email not registered");
                }
            }
        })
    });
});

// Setup Application

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json())
app.use(cors())

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