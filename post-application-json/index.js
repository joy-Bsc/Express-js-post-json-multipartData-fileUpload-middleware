var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

app.post('/',function(req,res){

    let JSONData = req.body;
    let name = JSONData.name;
    //let JSONString= JSON.stringify(JSONData);
    res.send(name);
})

app.listen(8030,function(){
    console.log("server run success");
})