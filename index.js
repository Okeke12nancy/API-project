/*
var http = require('http')

http.createServer(
    function (req, res){
       res.writeHead(200,{'Content-Type': 'text/plain'});
       res.end("Hello Nancy!") 
    }
).listen(5000);
*/

const express = require('express')
const app = express()


app.get("/", (req, res) =>{
    res.sendFile(__dirname + "/index.html")
});

app.get("/user", (req, res) =>{
    //const phone = req.body.phone
    res.json({username: "Nancy", age:21, sex: "Female"})
})
app.listen(8000, ()=>{
    console.log(`Server is Running on http://localhost:7000`);
});