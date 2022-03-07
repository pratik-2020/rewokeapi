const mysql = require('mysql2');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Pratik@123',
    database: 'rewokeapi'
});

const getPost = (req, res) => {
    const id = req.body.id;
    db.query("SELECT * FROM post WHERE user = '"+id+"'", (err, result) => {
        if(err){
            res.send(err.message);
        }
        else{
            res.send(result);
        }
    })
}

module.exports = getPost;