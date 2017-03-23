var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/' + process.argv[2];

mongo.connect(url, (err, db)=> {
  if (err) throw err;

  var users = db.collection('users');
  users.update({
    username: {
      $eq: 'tinatime'
    }
  }, {
    $set: {
      age: 40
    }
  }, (err, data)=> {
    if (err) throw err;
    db.close();
  });
});