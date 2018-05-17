const Sequelize = require('sequelize');
const db = require('./_db');

const Post = db.define('Post', {
  title: {
    type: Sequelize.STRING(100),
  },
  content: {
    type: Sequelize.TEXT,
  },
  isPublic: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Post;
