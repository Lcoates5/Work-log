import inquirer from "inquirer";
import "dotenv/config";
import pg from "pg";
// Connect to the database
const { Pool } = pg;
const pool = new Pool({
    host: "localhost",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: 5432,
});
// Function to display the menu
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
// Function to add a department
function addDepartment() {
    inquirer
        .prompt([
        {
            type: "input",
            name: "name",
            message: "What is the name of the department?",
        },
    ])
        // Insert the department into the database
        .then(async (answers) => {
        pool.query(`INSERT INTO department (name) VALUES ($1)`, [answers.name], (err, _res) => {
            if (err)
                throw err;
            console.log("Department added successfully");
            menu();
        });
    });
}
// Function to add a role
function addRole() {
    pool.query(`SELECT * FROM department`, (err, res) => {
        if (err)
            throw err;
        const departments = res.rows.map((department) => {
            return {
                name: department.name,
                value: department.id,
            };
        });
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
            // Insert the role into the database
            .then((answers) => {
            pool.query(`INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)`, [answers.title, answers.salary, answers.department_id], (err, _res) => {
                if (err)
                    throw err;
                console.log("Role added successfully");
                menu();
            });
        });
    });
}
;
function addEmployee() {
    pool.query(`SELECT * FROM role`, (err, res) => {
        if (err)
            throw err;
        const roles = res.rows.map((role) => {
            return {
                name: role.title,
                value: role.id,
            };
        });
        // Get the list of employees to use as managers
        pool.query(`SELECT * FROM employee`, (err, res) => {
            if (err)
                throw err;
            const employeeArray = res.rows.map((employee) => {
                return {
                    name: `${employee.first_name} ${employee.last_name}`,
                    value: employee.id,
                };
            });
            inquirer
                .prompt([
                {
                    type: "input",
                    name: "first_name",
                    message: "What is the employee's first name?",
                },
                {
                    type: "input",
                    name: "last_name",
                    message: "What is the employee's last name?",
                },
                {
                    type: "list",
                    name: "role_id",
                    message: "Select Role",
                    choices: roles,
                },
                {
                    type: "list",
                    name: "manager_id",
                    message: "Select Manager",
                    choices: employeeArray,
                },
            ])
                // Insert the employee into the database
                .then((answers) => {
                pool.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)`, [
                    answers.first_name,
                    answers.last_name,
                    answers.role_id,
                    answers.manager_id,
                ], (err, _res) => {
                    if (err)
                        throw err;
                    console.log("Employee added successfully");
                    menu();
                });
            });
        });
    });
}
// Function to update an employee's role
function updateEmployeeRole() {
    pool.query(`SELECT * FROM employee`, (err, res) => {
        if (err)
            throw err;
        const employees = res.rows.map((employee) => {
            return {
                name: `${employee.first_name} ${employee.last_name}`,
                value: employee.id,
            };
        });
        // Get the list of roles to choose from
        pool.query(`SELECT * FROM role`, (err, res) => {
            if (err)
                throw err;
            const roles = res.rows.map((role) => {
                return {
                    name: role.title,
                    value: role.id,
                };
            });
            // Prompt the user to select an employee and role
            inquirer
                .prompt([
                {
                    type: "list",
                    name: "employee_id",
                    message: "Select Employee",
                    choices: employees,
                },
                {
                    type: "list",
                    name: "role_id",
                    message: "Select Role",
                    choices: roles,
                },
            ])
                // Update the employee's role in the database
                .then((answers) => {
                pool.query(`UPDATE employee SET role_id = $1 WHERE id = $2`, [answers.role_id, answers.employee_id], (err, res) => {
                    if (err)
                        throw err;
                    console.log("Employee role updated successfully");
                    menu();
                });
            });
        });
    });
}
;
// Function to view all roles
function viewRoles() {
    pool.query(`SELECT * FROM role`, (err, res) => {
        if (err)
            throw err;
        console.table(res.rows);
        menu();
    });
}
;
// Function to view all employees
function viewEmployees() {
    pool.query(`SELECT * FROM employee`, (err, res) => {
        if (err)
            throw err;
        console.table(res.rows);
        menu();
    });
}
;
// Function to view all departments
function viewDepartments() {
    console.log("Viewing all departments");
    pool.query(`SELECT * FROM department`, (err, res) => {
        if (err)
            throw err;
        console.log("Departments");
        console.table(res.rows);
        menu();
    });
}
;
menu();
