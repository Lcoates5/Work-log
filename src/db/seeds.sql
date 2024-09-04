\c employee_db;
INSERT INTO department (name) VALUES ('Engineering');
INSERT INTO department (name) VALUES ('Sales');
INSERT INTO department (name) VALUES ('Finance');
INSERT INTO department (name) VALUES ('Legal');

INSERT INTO role (title, salary, department_id) VALUES ('Software Engineer', 120000, 1);
INSERT INTO role (title, salary, department_id) VALUES ('Sales Lead', 80000, 2);
INSERT INTO role (title, salary, department_id) VALUES ('Accountant', 70000, 3);
INSERT INTO role (title, salary, department_id) VALUES ('Sales Person', 70000, 4);
INSERT INTO role (title, salary, department_id) VALUES ('Lawyer', 90000, 5);

INSERT INTO employee (first_name, last_name, role_id) VALUES ('Alice', 'Johnson', 1);
INSERT INTO employee (first_name, last_name, role_id) VALUES ('Bob', 'Smith', 2);
INSERT INTO employee (first_name, last_name, role_id) VALUES ('Charlie', 'Thompson', 3);
INSERT INTO employee (first_name, last_name, role_id) VALUES ('David', 'Brown', 4);
INSERT INTO employee (first_name, last_name, role_id) VALUES ('Eve', 'Williams', 5);
INSERT INTO employee (first_name, last_name, role_id) VALUES ('Frank', 'Davis', 6);
INSERT INTO employee (first_name, last_name, role_id) VALUES ('Grace', 'Martinez', 7);
INSERT INTO employee (first_name, last_name, role_id) VALUES ('Heidi', 'Gonzalez', 8);
INSERT INTO employee (first_name, last_name, role_id) VALUES ('Ivan', 'Rodriguez', 9);
INSERT INTO employee (first_name, last_name, role_id) VALUES ('Judy', 'Lewis', 10);



