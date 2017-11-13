const express = require('express');
const router = express.Router();
const wikiRouter = ('./wiki.js');
const userRouter = ('./user.js');

// router.use('/wiki', wikiRouter)
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



module.exports = router;
