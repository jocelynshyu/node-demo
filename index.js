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

app.listen(4000, () => {
  console.log('listening http://localhost:4000');
});
