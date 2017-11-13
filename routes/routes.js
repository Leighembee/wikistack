const express = require('express');
const router = express.Router();
const wikiRouter = ('./wiki.js');
const userRouter = ('./user.js');

//wiki.js
const models = require('../models');
const Page = models.Page;
const  User = models.User;
//router.use('/wiki', wikiRouter)
// router.use('/user', userRouter)


router.get('/', function(req, res, next) {
  res.redirect('/');
  //res.send('got to GET /wiki/');
});

router.post('/wiki', function(req, res, next) {
  console.log(req.body.name);
  res.json(req.body);
  //res.send('got to POST /wiki/');
});


router.get('/add', function(req, res, next) {
  res.render('addpage');
});


// wiki.js
router.post('/', function(req, res, next) {

  var page = Page.build({
    title: { type: Sequelize.STRING, allowNull: false
    },
    content: { type: Sequelize.TEXT, allowNull: false
    }
  });

  page.save()
   .then(function(){
      res.redirect('/')
   })
});




module.exports = router;


module.exports = router;
