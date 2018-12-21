var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://127.0.0.1:27017/euphonydb';
var path=require('path');
var multer = require('multer');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{item:['title','b','c']});
});

router.post('/newsong', function(req, res, next) {
  MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
      if (err) {
        
        throw err;
      
      } else {
        
        var dbo = db.db("euphonydb");        
        dbo.collection("Users").findOne({UserName:'Nitin'},function(err,result){
          if(err) throw  err;
          //To rename Song
          // var arr =result.UserSongs;
          // var a = { 
          //   Sname: 'o saathi',
          //   NewName:'new'  
          // };
          // for(var i=0 ; i<arr.length ; i++){
          //   if(result.UserSongs[i].Sname===a.Sname)
          //   result.UserSongs[i].Sname=a.Sname;
          // }
          // console.log(result.UserSongs);
          

      });

      
         var file = req.body.audiofile;
        
        var item = {
          SongName: req.body.SongName,
            Artist: req.body.Artist,
            url:  './upload/'+Date.now()+file
          };
        
        var file = req.body.audiofile;
        var filename= file.name;
        
        if(path.extname(file)==='.mp3'){
          console.log(path.extname(file));
          dbo.collection("Songs").insertOne(item,function(err,res){
            if (err) throw err;
              console.log("1 document inserted");
          });
        }
        else{
          console.log('not a mp3'); 
        }
      }
      db.close();
  });
});


module.exports = router;
