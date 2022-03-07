const jwt = require('jsonwebtoken');

const mysql = require('mysql2');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Pratik@123',
    database: 'rewokeapi'
});
const signup = async( req, res) => {
    const user = req.body.user;
    const password = req.body.pass;
    const email = req.body.email;

    db.query('INSERT INTO user VALUES(?,?,?)', [user,password, email], async(err, result) => {
        if(err){
            res.send(err.message);
        }
        else{
            const secretKey = '' + user + new Date().getDate() + new Date().getTime();
            const token = await jwt.sign({user: user}, secretKey);
            res.send({
                success: true,
                tok: token,
                secret: secretKey
            });
        }
    })
}
module.exports = signup;
// {
//     "success": true,
//     "tok": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiQXl1c2giLCJpYXQiOjE2NDY2MjI5MTJ9.I2I0XnlKB33PfItJ4qsY7nA--jw_TIxCicvAPKdjJGc",
//     "secret": "Ayush71646622912103"
// }