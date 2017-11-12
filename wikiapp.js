const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
//const routes = require('../routes');
const morgan = require('morgan');
const bodyParser = require('body-parser');



// app.use('/', routes);
// app.use(express.static(__dirname + '/public'));

let env = nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);



app.listen(5432, (req, res) => {
  console.log("App is now listening on port " + 5432);
});
