// server/app.js
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const db = require("./knex.js");
const bodyParser = require("body-parser")
const app = express();

//CORS trial
const cors = require('cors');
app.use(cors({ origin: true, credentials: true }));

//body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// Setup logger
app.use(
  morgan(
    ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'
  )
);

// Serve static assets
app.use(express.static(path.resolve(__dirname, "..", "build")));

// Middleware to try and solve CORS error on cloud app
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,content-type,application/json"
  );
  next();
});

// GET all information
app.get("/movies/", async (req, res, next) => {
  try {
    const movieLists = await db.select().table("movie_lists");
    console.log("allLists!");
//    console.log(movieLists);
    res.json(movieLists);
  } catch (err) {
    console.error("Error loading lists!", err);
    res.sendStatus(500);
  }
});

//Post new movie
app.post("/movies/", async(req, res,) => {
  try {
    const postData = req.body;
    console.log("POSTメソッド");
    console.log("req.body",req.body);
    await db.into('movie_lists').returning(['title','URL']).insert(postData);
    const movieLists = await db.select().table("movie_lists");
    console.log("app内のpostの挙動",movieLists);
    //INSERT INTO tableName (column1, column2) VALUE (value1, value2)
    res.send(movieLists);
  } catch (err) {
    console.error("Error loading post!", err);
    res.sendStatus(500);
  }
});

app.delete('/:id', async(req, res) => {
  try{
    await db('movie_lists').where({id: req.params.id}).delete();
    const movieLists = await db.select().table("movie_lists");
    res.send(movieLists);

  } catch (err) {
    console.error("Error deleting post!", err);
    res.sendStatus(500);
  }
});

// Always return the main index.html, so react-router render the route in the client
app.get("*", (req, res, next) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

module.exports = app;
