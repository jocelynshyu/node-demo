const Sequelize = require('sequelize');
const uri = process.env.DATABASE_URL;

const db = Sequelize(uri, {
  dialect: 'postgres',
  dialectOptions: { ssl: true },
});

module.exports = db;
