const express = require('express')
const bodyParser = require('body-parser')
const mongoose =  require('mongoose')

const app = express()

app.use(bodyParser.json())

app.use(express.static(__dirname +'/css'));
app.use(express.static(__dirname +'/html'));
app.use(express.static(__dirname +'/images'));
app.use(express.static(__dirname +'/flaticon'));
app.use(express.static(__dirname +'/js'));
app.use(express.static(__dirname +'/modules'));
console.log(__dirname);
app.use(bodyParser.urlencoded({
    extended:true
}))
 mongoose.connect('mongodb://Localhost:27017/airwaysdb',{
    useNewUrlParser:true,useUnifiedTopology:true
});


var db =mongoose.connection;

db.on('error',()=> console.log("error connceting to database"));
db.once('open', ()=> console.log("connected to database"))

app.post("/sign_up", (req, res)=>{
    var fname = req.body.fname;
    var lname = req.body.lname;
    var email = req.body.email;
    var password = req.body.password;
    var cpassword =  req.body.cpassword;
    
    var data={
        "fname":fname,
        "lname":lname,
        "email":email,
        "passwordd":password,
        "confirmpassword":cpassword

    }
    // console.log("gg")
    db.collection('users').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("recorded")

    })
    return res.redirect("booking.html")
})


app.get("/", (req,res)=>{
    res.sendFile("C:/project/SEPM_project/html/index.html")
    res.set({
        "Allow-access-Allow-Origin":"*"
    })
    
})

app.listen(3001)
console.log("succesful")