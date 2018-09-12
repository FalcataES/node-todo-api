// const MongoClient = require('mongodb').MongoClient; 
const {MongoClient, ObjectID} = require('mongodb'); 

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.')
  }

  console.log('Connected to MongoDB Server'); 

  // db.collection('Todos').findOneAndUpdate({_id: new ObjectID('5b9953ba259dda3272e6e739')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result); 
  // });

  // Change name to my name in Users, increment age by 1. 
  // mongodb documentation: increment (google mongodb update operators).

  db.collection('Users').findOneAndUpdate({_id: new ObjectID('5b98029e467eb2131c34a35c')}, {
    $set: { name: 'Servando' },
    $inc: { age: 1 }
  }, { returnOriginal: false})
  .then((result) => {
    console.log(result); 
  });

  // db.close(); 
}); 

