// create web server
// update a comment
// delete a comment

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

var comments = [
    { id: 1, author: 'John', body: 'hello world' },
    { id: 2, author: 'Bob', body: 'hi' },
    { id: 3, author: 'Alice', body: 'nice to meet you' }
];

app.get('/comments', function(req, res) {
    res.json(comments);
});

app.get('/comments/:id', function(req, res) {
    var comment = comments.find(function(comment) {
        return comment.id === Number(req.params.id);
    });
    res.json(comment);
});

app.post('/comments', function(req, res) {
    var newComment = {
        id: comments.length + 1,