const express = require('express');
const bodyParser = require("body-parser");

const app = express();

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/api/data', function(req, res) {
    
    var isValid = false;
    
    if (req.body) {
        if (req.body.name && req.body.messages) {
            isValid = true;   
        }
    }
  
    if (!isValid) {
        return res.status(400).send('Name and messages is require.');
    }else{
        var response = req.body.name + ' mengrim pesan ' + req.body.messages + '.';
        console.log(response);  
        return res.status(201).send(response)
    }
    
});

var port = 3000;
app.listen(port, function () {
    console.log('Example app listening on port '+port+'!')
})