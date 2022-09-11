const express = require('express');
const app = express();

app.get("/", (req, res) =>{
    res.sendFile(__dirname + "/app.html")
});

app.get("/phones", (req, res) =>{
    //const phones = req.body.phoneInfo
    res.json({name: "Iphone 11 Pro", brand: "Apple", screenSize: "12px"})
    // console.log(phones)

})
app.listen(9000, ()=>{
    console.log(`Server is Running on http://localhost:9000`);
});