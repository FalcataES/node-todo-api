// const MongoClient = require('mongodb').MongoClient; 
const {MongoClient, ObjectID} = require('mongodb'); 

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.')
  }

  console.log('Connected to MongoDB Server'); 

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result); 
  // }); 

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result); 
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result); 
  // })

  // Challenge: 1) Borrar todos los 'Servando' 2) Borrar 'Mike' buscando por _id, 

  // db.collection('Users').deleteMany({name: 'Servando'}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndDelete({_id: ObjectID('5b9802b502888e1332a41f45') }).then((result) => {
    console.log(result); 
  });

  // db.close(); 
}); 

