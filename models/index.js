const Sequelize = require('sequelize');
let db = new Sequelize


const Page = sequelize.define('page', {
  title: Sequelize.STRING,
  urlTitle: Sequelize.STRING,
  content: Sequelize.TEXT,
  status: Sequelize.BOOLEAN
});

const User = sequelize.define('user',{
 name: Sequelize.STRING,
 email: Sequelize.STRING
});
