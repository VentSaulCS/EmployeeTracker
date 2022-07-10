const inquirer = require('inquirer')
// import inquirer from 'inquirer';
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

db.connect(function (err) {
  if (err) throw err;
  console.log("Welcome to SAUL's Employee Tracker Maangement System")
  startApp()
})

function startApp() {
  inquirer.prompt([
    {
      type: "list",
      message: "What would you like to do?",
      choices: ["View Departments", "View Employees", "View Roles", "Add Department", "Add Employees", "Add Roles", "Update Employee Role", "Exit App"],
      name: "option"
    }
  ]).then(function (response) {
    console.log(response);
    switch (response.option) {
      case "View Departments":
        viewdepartments()
        break;
      case "View Employees":
        viewemployees()
        break;
      case "View Roles":
        viewroles()
        break;
      case "Add Department":
        adddepartment()
        break;
      case "Add Employees":
        addemployees()
        break;
      case "Add Roles":
        addroles()
        break;
      case "Update Employee Role":
        updateemployeerole()
        break;
      default:
        db.end();
        process.exit(0);
    }
  })
}


function viewdepartments() {
  db.query("select * from department;", function (err, data) {
    if (err) throw err;
    console.table(data);
    startApp();
  })
}
function viewroles() {
  db.query("select * from roles;", function (err, data) {
    if (err) throw err;
    console.table(data);
    startApp();
  })
}
function viewemployees() {
  db.query("select * from Employees;", function (err, data) {
    if (err) throw err;
    console.table(data);
    startApp();
  })
}


function adddepartment() {
  const sql = `INSERT INTO employees (first_name, lastname, role_id, manager_id)
  VALUES (?, ?, ?, ?)`;
  const params = [answers.firstName, answers.lastName, answers.roleId, answers.managerId];
  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: body
    });
  });
}

function addemployees() {

}

function addroles() {

}

function updateemployeerole() {

}