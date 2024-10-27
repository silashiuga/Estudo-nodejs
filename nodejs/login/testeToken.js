const jwt = require('jsonwebtoken');

const user = {
  id:"20",
  name:"Joao",
  username:"joao@email.com",
  password:"1234567"
}
const secret = "zsdfsdvjsdufhsiudhijsdnflskjdf";
// const token = jwt.sign({id:user.id, username:user.username }, secret, {expiresIn: 30});

// console.log(token)

try{
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIwIiwidXNlcm5hbWUiOiJqb2FvQGVtYWlsLmNvbSIsImlhdCI6MTcyMzE2Mzk3OSwiZXhwIjoxNzIzMTY0MDA5fQ.7aFYE2IR3e9w-BtUxLkS3j4kp2Vc2mBMHUC0wWXj3A8";

  const validData = jwt.verify(token, secret);

  console.log(validData);

} catch(error){
  console.log(error)
}
