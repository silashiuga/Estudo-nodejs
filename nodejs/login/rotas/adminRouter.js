const express = require('express');
const router = express.Router();

const auth = require('../controllers/authController')

router.get('/', auth, (req, res) => {
  if(req.user.admin){
    res.send('Esse dado só deve ser visto pelo admin')
  } else {
    res.status(401).send("Not Admin: Acess Denied");
  }
});

router.get('/free', auth, (req, res)=>{
  res.send('Esse dado poder ser visto por que está logado')
})

module.exports = router;