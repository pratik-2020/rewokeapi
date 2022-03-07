const mysql = require('mysql2');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Pratik@123',
    database: 'rewokeapi'
});
const deletePost = (req, res) => {
    const chtid = req.body.id;
    db.query("UPDATE post SET status = '0' WHERE postid = '"+chtid+"'", (err, result) => {
        if(err){
            res.send(err.message);
        }
        else{
            res.send('Post deleted successfully!!!');
        }
    });
}

module.exports = deletePost;