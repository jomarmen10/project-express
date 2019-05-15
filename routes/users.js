const express = require('express');
const router = express.Router();
const bycrpt = require('bcrypt')


const User = require('../models/User')

/* GET users listing. */
router.get('/', (req, res) => {
  return res.json({data: 'Received a GET HTTP method users'});
});

router.post('/', async(req, res) => {
 try {
   const user = await User.create(req.body)
   res.json({user})
 } catch(err) {
   res.json({err})
 }
});






module.exports = router;
