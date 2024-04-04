db = db.getSiblingDB("mydb");

db.createCollection('users');

db.users.insertMany([
 {
    _id: '1',
    firstname: 'Jan',
    lastname: 'de Vries'
  },
  {
    _id: '2',
    firstname: 'Freek',
    lastname: 'Freak'
  },
  {
    _id: '4',
    firstname: 'John',
    lastname: 'Doe'
  } 
]);