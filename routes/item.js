var fs = require('fs');
var File = require('../models/file');
var mime = require('mime');

global.post_createItem  = function(req,res,next) {
   var newFile = new File();
   console.log(req.body);
   newFile.filename = req.body.filename;
   newFile.documentname = req.body.documentname;
   newFile.location = req.body.location;
   newFile.owner = req.session.passport.user;
   newFile.copies = req.body.copies;
   newFile.description = req.body.description;
   newFile.save(function(err) {
        if (err){
            console.log('Error in Saving file: '+err);
            throw err;
        }
        console.log('File Registration succesful' + newFile);
    });
};

global.post_updateItem  = function(req,res,next) {
   File.findOne({filename: req.body.filename}, function(err, file){
    file.decrement(function(err){
      if(err){console.log(err)};
    })
   })
};

global.post_deleteItem = function(req,res,next) {

};
global.post_download = function(req,res) {
  var fileName = "./uploads/" + req.body.filename;
  res.sendfile(fileName);
  /*var stat = fs.statSync(fileName);
  console.log(stat["size"]);
  var type =  mime.lookup(fileName);
  var file = fs.createReadStream(fileName);
  res.writeHead(200, {'Content-Type' : type,  'Content-Length' : stat["size"]});
  file.pipe(res);
  console.log("Should work");*/
};

global.post_release = function(req,res,next) {

};

global.get_searchItems = function(req, res) {
    File.find(function(err, files){
    if(err){ return next(err); }
    res.json(files);
  });
};



