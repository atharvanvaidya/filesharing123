var express = require('express');
var crypto = require('crypto');
var router = express.Router();
var fs = require('fs');
var multiparty = require('multiparty');
var util = require('util');
var mime = require('mime');
var multer = require('multer');

var storage = multer.diskStorage({
	destination: './uploads/',
	filename: function (req, file, cb) {
		crypto.pseudoRandomBytes(16, function (err,raw) {
			if (err) return cb(err);

			cb(null, file.originalname);
		});
	}
})
var upload = multer({ storage: storage });


var isLoggedin = function (req, res, next){}

var isLoggedin = function (req, res, next) {
    if (req.isAuthenticated()){
        return next();
    }
    res.sendfile('views/index.html');
}

module.exports = function(passport) {

    /*Handle Login POST*/
    router.post('/login', passport.authenticate('login', {
        successRedirect: '/',
        failureRedirect: '/login'
    }));
    /* GET home page. */
    router.get('/', isLoggedin, function(req, res) {
     res.sendfile('views/upload.html');
    });
	
	router.post('/upload', upload.any(), function(req, res, next) {
		console.log(req.body);
		console.log(req.files);
		res.json({success: true});
	});

    /* GET home page. */
    router.post('/', isLoggedin, function(req, res) {
        res.sendfile('views/upload.html');
    });


    /******LOGIN STUFF******/
    /*Handle Login POST */
    router.post('/login', passport.authenticate('login', {failureRedirect: '/login', successRedirect: '/'}));

    /* GET signup page. */
    router.get('/signup', get_signup);

    /* Handle Registration POST */
    router.post('/signup', passport.authenticate('signup', {failureRedirect: '/signup', successRedirect: "/"}));

    /* GET login page. */
    router.get('/login', get_login);

    /* Handle Logout */
    router.get('/signout', get_signout); 

    /*****ITEM MANAGEMENT******/
    
    router.get('/searchItems', get_searchItems);
    router.post('/createItem', post_createItem);
    router.post('/updateItem', post_updateItem);
    router.post('/deleteItem', post_deleteItem);
    router.post('/download', post_download);
    router.post('/release', post_release);
    
    /*****GROUP MANAGEMENT*****/

    router.post('/createGroup', post_createGroup);
    /* Adds a user to a group */
    router.post('/addToGroup', post_addToGroup);
    router.post('/removeFromGroup', post_removeFromGroup);
    router.post('/deleteGroup', post_deleteGroup);
    router.get('/getGroups', get_getGroups);
    

    return router;
}








