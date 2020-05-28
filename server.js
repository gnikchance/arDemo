const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', function(req, res){
res.sendFile(__dirname + '/arDEMO.html');
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))