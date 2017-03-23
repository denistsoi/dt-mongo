var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/learnyoumongo'
mongo.connect(url, (err, db)=> {
  var ParrotsCollection = db.collection('parrots');
  
  ParrotsCollection.find({ 
    age: {
      $gt: parseInt(process.argv[2]) 
    } 
  }).toArray((err, documents)=> {
    console.log(documents);
    db.close();
  });
});