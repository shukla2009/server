var todo = require('./todo.controller');

module.exports = function (app) {

    app.use('/todo', function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers",
            "X-Requested-With,Content-Type, Accept");
        res.header('Access-Control-Allow-Methods', 'POST, GET, DELETE, PUT');
        next();
    });

    app.post('/todo/clear', todo.clearCompleted);
    app.post('/todo', todo.add);
    app.get('/todo', todo.get);
    app.put('/todo/:id', todo.update);
    app.delete('/todo/:id', todo.remove);
}