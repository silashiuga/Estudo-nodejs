const jwt = require('jsonwebtoken');
module.exports = function(req, res, next){
  const token = req.header('authorization-token');
  if(!token){
    return res.status(401).send("Acess Denied");
  }
  try{
    const userVerified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = userVerified;
    console.log(req.user);
    console.log(userVerified);
    next();
  } catch(error) {
    res.status(401).send("Acess Denied");
  }
}