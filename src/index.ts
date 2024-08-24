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
function addDepartment() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is the name of the department?",
        },
      ])
      .then((answers) => {
        client.query(
          `INSERT INTO department (name) VALUES ($1)`,
          [answers.name],
          (err, res) => {
            if (err) throw err;
            console.log("Department added successfully");
            menu();
          }
        );
      });
  }
  function addRole() {
    client.query(`SELECT * FROM department`, (err, res) => {
      if (err) throw err;
      const departments = res.rows.map((department) => {
        return {
          name: department.name,
          value: department.id,
        };
  
        inquirer
          .prompt([
            {
              type: "input",
              name: "title",
              message: "What is the title of the role?",
            },
            {
              type: "list",
              name: "department_id",
              message: "What department does the role belong to?",
              choices: departments,
            },
            {
              type: "input",
              name: "salary",
              message: "What is the salary of the role?",
            },
          ])
          .then((answers) => {
            client.query(
              `INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)`,
              [answers.title, answers.salary, answers.department_id],
              (err, res) => {
                if (err) throw err;
                console.log("Role added successfully");
                menu();
              }
            );
          });
      });
    });
  }
  
  