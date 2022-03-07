const mysql = require('mysql2');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Pratik@123',
    database: 'rewokeapi'
});
const deleteComment = (req, res) => {
    const commentid = req.body.id;
    db.query("UPDATE comment SET status = '0' WHERE commentid = '"+commentid+"'", (err, result) => {
        if(err){
            res.send(err.message);
        }
        else{
            res.send('Comment deleted successfully');
        }
    });
}

module.exports = deleteComment;