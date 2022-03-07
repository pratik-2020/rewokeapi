const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();
app.use(cors());
app.use(express.json());
const jwt = require('jsonwebtoken');
const addComment = require('./routes/comment/add-comment');
const deleteComment = require('./routes/comment/delete-comment');
const insertPost = require('./routes/post/insert-post');
const deletePost = require('./routes/post/delete-post');
const login = require('./routes/login/login');
const signup = require('./routes/login/signup');
const getComment = require('./routes/comment/getcomment');
const getPost = require('./routes/post/get-post');
const hardlog = require('./routes/login/hard-login');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Pratik@123',
    database: 'rewokeapi'
});
app.post('/addcomment', (req, res) => {
    addComment(req, res);
});
app.post('/hardlog', (req, res) => {
    console.log(req.body);
    hardlog(req, res);
})
app.post('/detetecomment', (req, res) => {
    deleteComment(req, res);
});
app.post('/insertpost', (req, res) => {
    insertPost(req, res);
});
app.post('/login', (req,res) => {
    login(req, res);
})
app.post('/deletepost', (req, res) => {
    deletePost(req, res);
});
app.post('/signup', (req, res) => {
    signup(req, res);
});
app.post('/getpost', (req, res) => {
    getPost(req, res);
});
app.post('/getcomment', (req, res) => {
    getComment(req, res);
})
app.listen(3000, () => {
    console.log('Listening at 3000');
})