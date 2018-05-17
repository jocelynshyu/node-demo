if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const Express = require('express');
const bodyParser = require('body-parser');
const { db, User, Post } = require('./models');

const app = Express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.set('view engine', 'pug');

// post
app.get('/posts', async ({ query }, res) => {
  const limit = 5;
  const page = Number.parseInt(query.page, 10) || 1;

  const posts = await Post.findAndCountAll({
    limit,
    offset: limit * (page - 1),
  });

  res.send(
    Object.assign(posts, {
      page,
      totalPages: Math.ceil(posts.count / limit),
    })
  );
});

app.get('/posts/:id', async ({ params: { id } }, res) => {
  const post = await Post.findById(id);
  res.send(post);
});

app.post('/posts', async ({ body }, res) => {
  const post = await Post.create(body);
  // res.status(201).send(post);
  res.redirect('/');
});

// app.put('/posts/:id', async ({ body, params: { id } }, res) => {
//   const post = await Post.update({
//     where: { id },
//   });
//   res.status(202).send(post);
// });

app.delete('/posts/:id', async ({ params: { id } }, res) => {
  await Post.destroy({ where: { id } });
  res.status(204).end();
});

app.get('/', async (req, res) => {
  const posts = await Post.findAll({
    order: [[ 'createdAt', 'DESC' ]],
  });
  res.render('index', { posts });
});

db
  .sync({
    // force: process.env.NODE_ENV !== 'production'
    force: false,
  })
  .then(() => {
    app.listen(process.env.PORT, (error) => {
      if (error) {
        console.log('error');
        return;
      }
      console.log(`listening port ${process.env.PORT}`);
    });
  });
