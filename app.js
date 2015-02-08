var express = require('express');
var parser = require('body-parser');
var PORT = 9000;
var app = express();
app.use(parser.json());
require('./todo/todo.route')(app);

app.use('/', function (req, res) {
    res.send("Bad Request");
});
app.listen(PORT, function () {
    console.log('Application is running on http://localhost:' + PORT);
});


