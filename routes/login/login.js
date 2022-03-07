const jwt = require('jsonwebtoken');

const log = (req, res) => {
    const user = req.body.user;
    const secretKey = req.body.secretKey;
    const token = req.body.token;
    const ver = jwt.verify(token, secretKey);
    if(ver.user === user){
        res.send('USer may proceed!!');
    }
    else{
        res.send('Invalid user!!!');
    }
}

module.exports = log;