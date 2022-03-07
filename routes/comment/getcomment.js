const mysql = require('mysql2');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Pratik@123',
    database: 'rewokeapi'
});

const getComment = (req, res) => {
    const id = req.body.id;
    db.query("SELECT * FROM comment WHERE postid = '"+id+"'", (err, result) => {
        if(err){
            res.send(err.message);
        }
        else{
            res.send(result);
        }
    })
}

module.exports = getComment;