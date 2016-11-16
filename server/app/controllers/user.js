const jwt = require('jwt-simple');
const User = require('../models/user');
const config = require('../../config');

exports.getAllUsers = function(req,res){
    User.find({},function(err,users){
        if (err){
            res.status(500).json({"success":false,"errMsg":err});
        }else{
            res.json({"success":true,"data":users});
        }
    })
}

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signin = function(req, res, next) {
  // User has already had their username and password auth'd
  // We just need to give them a token
  res.send({ "success":true,"token": tokenForUser(req.user) });
}

exports.signup = function(req, res, next) {
    const username=req.body.username;
    const password = req.body.password;
   //const username = "shuchengc";
   //const password = "123";
  console.log("req:",req.body);
  if (!username||!password) {
    return res.status(422).send({ "success":false, "errMsg": "You must provide username and password"});
  }

  // See if a user with the given username exists
  User.findOne({username:username}, function(err, existingUser) {
    if (err) { return next(err); }

    // If a user with username does exist, return an error
    if (existingUser) {
      return res.status(422).send({"success":false, "errMsg": "Username is in use" });
    }

    // If a user with username does NOT exist, create and save user record
    const user = new User({
      username: username,
      password: password
    });

    user.save(function(err) {
      if (err) { return next(err); }

      // Repond to request indicating the user was created
      res.json({ "success":true, "token": tokenForUser(user) });
    });
  });
}