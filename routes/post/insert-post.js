const mysql = require('mysql2');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Pratik@123',
    database: 'rewokeapi'
});
const insertPost = (req, res) => {
    const user = req.body.user;
    const post = req.body.post;
    const id = ''+ user + new Date().getTime() + new Date().getDate();
    db.query('INSERT INTO post VALUES(?,?,?,?)', [user, id,post, '1'], (err, result) => {
        if(err){
            res.send(err.message);
        }
        else{
            res.send('Post added successfully!!');
        }
    });
}

module.exports = insertPost;