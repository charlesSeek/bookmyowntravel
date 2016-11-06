var User = require('../models/user');
var jwt = require('jsonwebtoken');
var config = require('../../config');

exports.userCreateToken = function(req,res){
	var username = req.body.username;
	var password = req.body.password;
	if(!username||!password){
		res.status(422).json({message:'username and content can not be empty'});
	}else {
		User.findOne({username:username},function(err,user){
			if (err){
				res.status(500).json(err);
			}else {
				if(!user){
					res.json({success:false,message:'user is not existed and authentication failed'});
				}else{
					user.comparePassword(password,function(err,isMatch){
						if (err){
							return res.status(500).json(err);
						}else {
							if(!isMatch){
								res.json({success:false,message:'username or password is not valid and authentication failed'});
							}else{
								var token = jwt.sign(user,config.secret,{
									expiresIn:3600
								});
								res.json({
									success:true,
									message:' authenticated successfully',
									token:token
								});
							}
						}
					});
				}
			}
		});
	}
}

exports.authRequired = function(req,res,next){
	var token = req.body.token||req.query.token||req.headers['access-token'];
	if(!token){
		res.status(422).json({message:'token can not be empty'});
	}else {
		jwt.verify(token,config.secret,function(err,decoded){
			if (err){
				return res.json({message:'failed to authenticated by the token'});
			}else {
				req.decoded = decoded;
				next();
			}
		})
	}
}