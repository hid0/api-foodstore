const mongoose = require("mongoose");

const { dbHost, dbUser, dbPort, dbPass, dbName } = require("../app/config");

mongoose.connect(
  `mongodb://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}?authSource=admin`, // mongodb://faiz:faiz@localhost:27017/latihan?authSource=admin
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  }
);

const db = mongoose.connection;

module.exports = db;
