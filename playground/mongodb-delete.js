const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if(err){
    return console.log('Unable to connect to MongoDb Server');
  }
  console.log('Connected to MongoDb Server');

//deleteMany
// db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
//   console.log(result);
// });

//deleteOne
// db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
//   console.log(result);
// });

//findOneAndDelete
// db.collection('Todos').findOneAndDelete({completed: false}).then((docs) => {
//   console.log(docs);
// });

// db.collection('Users').deleteMany({name: 'Rashi Agrawal'}).then((result) => {
//   console.log(result);
// });

db.collection('Users').findOneAndDelete({
  _id: new ObjectId('59abd2ea63436a2d945351bf')
}).then((docs) => {
  console.log(docs);
});

//  db.close();
});
