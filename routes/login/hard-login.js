const mysql = require('mysql2');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Pratik@123',
    database: 'rewokeapi'
});
const hardlog = (req, res) => {
    const user = req.body.user;
    const pass = req.body.pass;

    db.query("SELECT password FROM user WHERE username = '"+user+"'", (err, result) => {
        if(err){
            res.send(err.message);
        }
        else{
            if(result.length === 0){
                res.send('User does not exist!!!');
            }
            else if(result[0].password === pass){
                res.send('User can proceed');
            }
            else{
                res.send('Invalid credentials!!!');
            }
        }
    })
}

module.exports = hardlog;