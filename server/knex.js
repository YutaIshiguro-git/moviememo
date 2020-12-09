const knex = require("knex");
require("dotenv").config(); 

const db = knex({
  client: "pg",
  connection: process.env.DATABASE_URL,//本番環境どうすりゃいいんじゃ
/*
  connection: {
    host: 'localhost',
    database: 'moviememodb',
    user:     'Yuta',
    password: '' 
  },
*/
  searchPath: "public",
});

module.exports = db;
