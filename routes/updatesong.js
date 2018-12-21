var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://127.0.0.1:27017/euphonydb';
var path=require('path');
var multer = require('multer');

router.get('/updatesong', function(req, res, next) {
    res.render('updatesong');
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
      if (err) {
        
        throw err;
      
      } else {
        
        var dbo = db.db("euphonydb");
        dbo.collection("Users").findOne({UserName:'Nitin'},function(err,result){
            if(err) throw  err;
            
            console.log(result.UserName);
        
        });
    }
      db.close();
  });

});
module.exports = router;
