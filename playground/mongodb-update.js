const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if(err){
    return console.log('Unable to connect to MongoDb Server');
  }
  console.log('Connected to MongoDb Server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectId('59abfd7ee2f8339cbffaad4a')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectId('59abce6cb684091d206529d5')
  }, {
    $set: {
      name: 'Rashi'
    },
    $inc: {
      age: -2
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  //  db.close();
});
