const Express = require('express');

const app = Express();

app.get('/', (req, res) => {
  console.log('Hello');
});

app.listen(4000, () => {
  console.log('listening http://localhost:4000');
});
