if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const Express = require('express');
const { db, User } = require('./models');

const app = Express();

db
  .sync({ force: process.env.NODE_ENV !== 'production' })
  .then(() => {
    app.listen(process.env.PORT, (error) => {
      if (error) {
        console.log('error');
        return;
      }
      console.log(`listening port ${process.env.PORT}`);
    });
  });
