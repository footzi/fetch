const express = require('express');
const multer = require('multer');

const app = express();
const upload = multer();

app.use('/', express.static(__dirname + '/'));

app.use(upload.array());

app.post('/test', function (req, res) {
    res.send(200, req.body);
});
  
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});