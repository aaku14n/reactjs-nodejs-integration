var express = require("express");
var router = express.Router();
var userController = require("../controller/userController.js");
/* GET home page. */
router.get("/", function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.json([
    {
      id: 1,
      username: "samsepi0l"
    },
    {
      id: 2,
      username: "D0loresH4ze"
    }
  ]);
});
router.get("/users", userController.fetchUser);
router.post("/dltUser", userController.deleteUser);
router.post("/addUser", userController.addUser);
router.post("/updateUser",userController.updateUser);
module.exports = router;
