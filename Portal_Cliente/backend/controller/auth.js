const User = require('../models/User')
const passport = require('passport')
const {confirmAccount}=require("../config/nodemailer")

exports.indexGet = (req, res, next) => res.render('index')



exports.logout = (req, res, next) => {
  req.logout()
  res.redirect('/')
}

exports.menu = (req, res, next) => res.render('menu')

exports.confirmGet = async ( req, res, next)=> {
  const {confirmationCode} = req.params
  await User.findOneAndUpdate({confirmationCode}, { status: "Active"}, {new: true})
  res.render('confirmation')
}

exports.loginPost=(req,res)=>{
  res.redirect("/admin")
}

//exports.adminGet=(req,res)=>{
//  res.render("admin")
//}