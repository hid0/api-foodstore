const mongoose = require("mongoose");

const { dbHost, dbUser, dbPort, dbPass, dbName } = require("../app/config");

mongoose.connect(
  `mongodb://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  }
);

const db = mongoose.connection;

module.exports = db;
