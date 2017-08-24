var express = require("express");
var db = require("mysql");

var mysqlConnect = function() {
  var conbox = db.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "test",
    dateStrings: "date",
    multipleStatements: false,
    rejectUnauthorized: true
  });
  conbox.query("SELECT 1", function(err) {
    if (err) {
      conbox.end();
      console.log(err.code);
      console.log(err.fatal);
    }
  });
  return conbox;
};
module.exports.localConnect = mysqlConnect;
