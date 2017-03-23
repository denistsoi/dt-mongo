var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/' + process.argv[2];
var collectionarg = process.argv[3];
var idarg = process.argv[4];

mongo.connect(url, (err, db)=> {
  if (err) throw err;

  var collection = db.collection(collectionarg);
  
  collection.remove({
    _id: {
      $eq: idarg
    }
  }, (err) => {
    if (err) throw err;
    db.close();
  });
});

// var mongo = require('mongodb').MongoClient

// var url = 'mongodb://localhost:27017/' + process.argv[2]

// mongo.connect(url, function(err, db) {
//   if (err) throw err
//   var collection = db.collection(process.argv[3])
//   collection.remove({
//     _id: process.argv[4]
//   }, function(err) {
//     if (err) throw err
//     db.close()
//   })
// })