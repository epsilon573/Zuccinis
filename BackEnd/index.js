const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');
const cors = require('cors');

// Setup Database

const connString = "mongodb+srv://sahil:helloworld@training.4phw8.mongodb.net/practice?retryWrites=true"
const mongoClient = mongodb.MongoClient;

mongoClient.connect(connString, {useUnifiedTopology: true} ,(err,client)=>{
    if(err) 
        return console.error(err);
    
    console.log('Connected to Database!')

    const db = client.db('practice');
    const register = db.collection('register');

    register.find().toArray().then( results =>{
        console.log(results);
    }).catch( error=> {
        console.error(error);
    });

    app.post('/sendReq',(req,res)=>{
        console.log(req.body);
        var myObj = {
            Name: req.body.Name,
            Email: req.body.Email,
            Password: req.body.Password,
            Contact: req.body.Contact
        };
    
        register.insertOne(myObj, (err,res)=> {
            if(err) console.error(err);
            else console.log("Entry Inserted");
        })
    });
    
    app.get('/getReq',(req,res)=>{
        register.find().toArray().then(succ=>{
            if(succ) res.send(succ);
            else console.log("Couldn't Fulfill Get Request!")
        })
    });

    app.post('/getReq',(req,res)=>{
        var id = mongodb.ObjectId(req.body.fetchID);
        register.findOne({ _id: id}).then(succ=>{
            res.send(succ);
        });
    });

    app.post('/delReq', (req,res)=>{
        var idx = mongodb.ObjectId(req.body.delID);
        register.deleteOne({
            _id: idx
        });
    });

    app.post('/editReq',(req,res)=>{
        var id = mongodb.ObjectId(req.body.updateID);
        register.updateOne({_id: id}, {
            $set:{
                Name: req.body.Name,
                Email: req.body.Email,
                Password: req.body.Password,
                Contact: req.body.Contact  
                }
        });
    });

});

// Setup Application

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    console.log("Hello");
});

app.listen(5000);