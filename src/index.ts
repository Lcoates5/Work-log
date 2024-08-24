import inquirer from "inquirer";
import "dotenv/config";
import pg from "pg";

const { Pool } = pg;
const pool = new Pool({
  host: "localhost",
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: 5432,
});
const client = await pool.connect();

function menu() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "menu",
        message: "What would you like to do?",
        choices: [
          "Add Employee",
          "Add Role",
          "Add Department",
          "Update Employee Role",
          "View Employees",
          "View Roles",
          "View Departments",
          "Exit",
        ],
      },
    ])
    .then((answers) => {
      switch (answers.menu) {
        case "Add Employee":
          addEmployee();
          break;
        case "Add Role":
          addRole();
          break;
        case "Add Department":
          addDepartment();
          break;
        case "Update Employee Role":
          updateEmployeeRole();
          break;
        case "View Employees":
          viewEmployees();
          break;
        case "View Roles":
          viewRoles();
          break;
        case "View Departments":
          viewDepartments();
          break;
        case "Exit":
          pool.end();
          process.exit();
          break;
      }
    });
}
