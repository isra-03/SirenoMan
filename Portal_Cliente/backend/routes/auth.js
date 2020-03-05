const router = require('express').Router();
const User = require('../models/User');
const passport = require('../config/passport');
const {confirmAccount}=require('../config/nodemailer')

router.post('/signup', async (req, res, next) => {
  const {name,email,password}=req.body
  const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let token = '';
  for (let i = 0; i < 20; i++) {
    token += characters[Math.floor(Math.random() * characters.length )];
  }
   await User.register({name,email,confirmationCode:token}, password)
    .then(async (user) =>{ 
           const endpoint = `https://sirenoman.netlify.com/${token}`
      await confirmAccount(email,endpoint).catch(err=>console.log(err)

      )
        res.status(201).json({user})})
    .catch((err) =>  res.status(500).json({ err }));
})

router.post('/login', passport.authenticate('local'), (req, res, next) => {
  const { user } = req;
  res.status(200).json({ user });
});

router.get('/logout', (req, res, next) => {
  req.logout()
  res.status(200).json({ msg: 'Logged out' })
})

router.get('/profail', isAuth, (req, res, next) => {
  User.findById(req.user._id)
    .populate('User')
    .then(user => res.status(200).json({ user }))
    .catch(err => res.status(500).json({ err }))
})


function isAuth(req, res, next) {
  req.isAuthenticated() ? next() : res.status(401).json({ msg: 'Log in first' })
}

module.exports = router
