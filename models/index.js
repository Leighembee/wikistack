const Sequelize = require('sequelize');
let db = new Sequelize('postgres://localhost:5432/wikistack');




let Page = db.define('page', {
  title: { type: Sequelize.STRING
  },
  urlTitle: { type: Sequelize.STRING
  },
  content: { type: Sequelize.TEXT
  },
  status: { type: Sequelize.BOOLEAN
  }
});

let User = db.define('user',{
 name: { type: Sequelize.STRING
},
 email: { type: Sequelize.STRING
}

});

module.exports = {
  Page: Page,
  User: User
};
