import inquirer from "inquirer";
import dotenv from "dotenv";
dotenv.config();
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
function createDepartment() {
    inquirer
        .prompt([
        {
            type: "input",
            name: "name",
            message: "What is the name of the department?",
        },
    ])
        .then((answers) => {
        client.query(`INSERT INTO department (name) VALUES ('${answers.name}')`);
    });
}
