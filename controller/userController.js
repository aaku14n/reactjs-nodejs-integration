var db = require("../db_config/db_config").localConnect();
var mysql = require('mysql');
var deleteUser = function(req, res, next) {
  let id = req.body.id;
  let sql = "update test set status=0 where id=" + mysql.escape(id);
  db.query({ sql: sql }, function(err, rows, fields) {
    if (!err) {
      res.status(200);
      res.send(JSON.stringify({ status: "success" }));
    } else {
      res.status(400);
      res.send(JSON.stringify({ status: "failed" }));
    }
  });
};

var fetchUser = function(req, res, next) {
  let sql =
    "Select id as _id,title,description as description,status from test where status=1";
  db.query({ sql: sql }, function(err, rows, fields) {
    res.json(rows);
  });
};
var addUser = function(req,res,next){
  // console.log(req.body);
  let title = req.body.title;
  let description = req.body.description;
  let sql = "Insert into test (title,description,status) values ("+mysql.escape(title)+",'"+ mysql.escape(description) +"',1)"
  db.query({sql:sql},function(err,rows,fields){
    if(!err){
      res.json('success');
    }
    else {
      res.json('failed');
    }
  })
  
}

var updateuser = function(req,res,next){
  let title = req.body.title;
  let desc = req.body.desc;
  let id = req.body.id;
  let sql = "update test SET title="+mysql.escape(title)+",  description="+mysql.escape(desc)+" where id="+id;
  db.query({sql:sql},function(err,rows,fields){
    if(!err){
      res.json('success');
    }else{
      res.json('failed');
    }
  })
}
module.exports = {
  deleteUser: deleteUser,
  fetchUser: fetchUser,
  addUser:addUser,
  updateUser:updateuser
};
