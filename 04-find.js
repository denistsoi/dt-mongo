var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/learnyoumongo'
var arg = process.argv[2];

mongo.connect(url, (err, db)=> {
  var ParrotsCollection = db.collection('parrots');
  
  ParrotsCollection.find({ 
    age: {
      $gt: parseInt(arg) 
    }}, {
      name: 1,
      age: 1,
      _id: 0
    }).toArray((err, documents)=> {
      console.log(documents);
      db.close();
  });
});