var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url, (err, db) => {
  if (err) throw err;

  var prices = db.collection('prices');

  prices.aggregate([{
    $match: {
      size: process.argv[2]
    }
  }, {
    $group: {
      _id: 'average',
      average: {
        $avg: '$price'
      }
    }
  }]).toArray(function (err, results) {
    if (err) throw err
    // handle error
    var o = results[0]
    console.log(Number(o.average).toFixed(2));
    db.close();
  });
});