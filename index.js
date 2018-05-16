if ((process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const Express = require('express');
const helmet = require('helmet');
const serveStatic = require('serve-static');

const app = Express();

// app.use('/', (req, res, next) => {
//   console.log('middleware');
//   next();
// });
app.use(serveStatic('public'));
app.use(helmet());

app.get('/', (req, res) => {
  res.send('Hello');
});

app.listen(process.env.PORT, () => {
  console.log(`listening port ${port}`);
});
