// const inquirer = require('inquirer')
const mysql = require('mysql2');
require('console.table')
require("dotenv").config()
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: process.env.DB_USER,
      // TODO: Add MySQL password here
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
    }
    
  );

  db.connect(function(err){
    if(err) throw err;
    console.log("Welcome to SAUL's Employee Tracker Maangement System")

  })