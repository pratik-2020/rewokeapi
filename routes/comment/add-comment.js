const mysql = require('mysql2');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Pratik@123',
    database: 'rewokeapi'
});
const addComment = (req, res) => {
    const user = req.body.user;
    const chtid = req.body.id;
    const comment = req.body.comment;
    const id = ''+ user + new Date().getTime() + new Date().getDate();
    db.query('INSERT INTO comment VALUES(?,?,?,?,?)', [user, chtid, comment, '1', id], (err, response) => {
        if(err){
            res.send(err);
        }
        else{
            res.send('User added successfully!!!');
        }
    });
}
module.exports = addComment;