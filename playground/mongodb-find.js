const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if(err){
    return console.log('Unable to connect to MongoDb Server');
  }
  console.log('Connected to MongoDb Server');

  // db.collection('Todos').find({
  //   _id: new ObjectId('59abd753e2f8339cbffaa8df')
  // }).toArray().then((docs) => {
  //   console.log('Todos:');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch Todos',err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch Todos',err);
  // });

  db.collection('Users').find({name: 'Rashi Agrawal'}).toArray().then((docs) => {
    console.log('Queried data:');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to query the data', err);
  });

  db.close();
});
