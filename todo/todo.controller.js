var todos = [];

exports.add = function (req, res) {
    var todo = req.body;
    todos.push(todo);
    res.send(todo);
}
exports.remove = function (req, res) {
    var id = req.params.id;
    todos.splice(id, 1);
    res.send("Deleted");
}
exports.update = function (req, res) {
    var todo = req.body;
    var id = req.params.id;
    todos[id] = todo;
    res.send(todo);
}
exports.get = function (req, res) {
    res.send(todos);
}
exports.clearCompleted = function (req, res) {
    for (var i = todos.length - 1; i >= 0; i--) {
        if (todos[i].completed) {
            todos.splice(i, 1);
        }
    }
    res.send("Clear Completed")
}