const express = require('express');
const router = express.Router();
const models = require('../models');
const Page = models.Page;
const  User = models.User;

// router.get('/', function(req,res,next){
//   res.redirect('/');
// })



  router.get('/add', function(req, res, next) {
    res.render('addpage');
  });

router.post('/', function(req,res,next){
  let page = Page.build({
    title: req.body.title,
    content: req.body.content
   })
   page.save()
   .then(function(){
     console.log('do something');
   }).catch(function(err){
     next(err);
   })
})


module.exports = router;
