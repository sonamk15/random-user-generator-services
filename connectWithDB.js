const mysql = require('mysql');
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'shona123',
  database: 'random_users'
});

module.exports = connection;
connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
  
    console.log('connected as id ' + connection.threadId);
  });

  var knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : 'shona123',
      database : 'random_users'
    }
  });
  module.exports = knex;

 knex.raw('CREATE DATABASE IF NOT EXISTS myapp')
  .then((data) => {
    console.log('Databse created congo.....');
  })

  .catch((err) => {
    console.log("there is some error while crating the database",err);
  })

  knex.schema.hasTable('users').then((exists) => {
    if (!exists) {
      return knex.schema.createTable('users', (table) => {
          table.increments('id').primary();
          table.string('name', 100).notNullable();
          table.string('image',55).notNullable();
          table.string('phone',55).notNullable();
          table.string('address',55).notNullable();
          table.string('email',55).notNullable();
          table.string('gender',55).notNullable();
          table.string('dob',55).notNullable();

        })
        .catch((err) => {
          console.log("There is some err while writing the quety")
        })
    }
    return console.log('table is created!')
  })
  
