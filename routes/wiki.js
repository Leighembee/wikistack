const express = require('express');
const router = express.Router();
const models = require('../models');
const Page = models.Page;
const  User = models.User;

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
