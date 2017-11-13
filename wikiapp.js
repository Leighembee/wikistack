const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const routes = require('./routes/routes.js');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const models = require('./models');


app.use(bodyParser.json());


let env = nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);


// models.User.sync({})
//  .then(function () {
//    return models.Page.sync({})
//  })


app.use(morgan('tiny'));
app.use(express.static(__dirname + '/public'));
app.use('/', routes);

models.db.sync({force: true})
  .then(function() {
    app.listen(3000, () => {
      console.log("App is now listening on port " + 3000);
    });
  })
  .catch(console.error);

// app.listen(5432, () => {
//   console.log("App is now listening on port " + 5432);
// });
