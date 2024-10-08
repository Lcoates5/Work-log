\c employee_db;

INSERT INTO department (name) VALUES
('Engineering'),
('Sales'),
('Finance'),
('Legal');


INSERT INTO role (title, salary, department_id) VALUES 
('Software Engineer', 120000, 1),
('Sales Lead', 80000, 2),
('Accountant', 70000, 3),
('Sales Person', 70000, 2),
('Lawyer', 90000, 4);

INSERT INTO employee (first_name, last_name, role_id, salary, manager_id) VALUES 
('Alice', 'Johnson', 1, NULL),
('Bob', 'Smith', 2, 1), 
('Charlie', 'Thompson', 3, 1),  
('Diana', 'Lee', 4, 2),  
('Eve', 'Wong', 5, 3),  
('Frank', 'Chen', 1, NULL),
('Grace', 'Li', 2, 1),
('Hank', 'Wu', 3, 1),
('Ivy', 'Wang', 4, 2),
('Jack', 'Zhang', 5, 3),
('Kelly', 'Zhao', 1, NULL),
('Larry', 'Xu', 2, 1),
('Mandy', 'Wu', 3, 1),
('Nancy', 'Zhang', 4, 2),
('Oscar', 'Xie', 5, 3),
('Peggy', 'Wang', 1, NULL),
('Quincy', 'Xu', 2, 1),
('Randy', 'Wu', 3, 1),
('Sandy', 'Zhang', 4, 2),
('Tom', 'Xie', 5, 3),
('Ursula', 'Wang', 1, NULL),
('Vicky', 'Xu', 2, 1),
('Wendy', 'Wu', 3, 1),
('Xander', 'Zhang', 4, 2),
('Yvonne', 'Xie', 5, 3),
('Zack', 'Wang', 1, NULL),
('Amy', 'Xu', 2, 1),
('Ben', 'Wu', 3, 1),
('Cathy', 'Zhang', 4, 2),
('David', 'Xie', 5, 3),
('Ella', 'Wang', 1, NULL),
('Fred', 'Xu', 2, 1),
('Gina', 'Wu', 3, 1),
('Hugo', 'Zhang', 4, 2),
('Iris', 'Xie', 5, 3),
('Jenny', 'Wang', 1, NULL),
('Kevin', 'Xu', 2, 1),
('Lily', 'Wu', 3, 1),
('Manny', 'Zhang', 4, 2),
('Nina', 'Xie', 5, 3),
('Oscar', 'Wang', 1, NULL),
('Patty', 'Xu', 2, 1),
('Quincy', 'Wu', 3, 1),
('Randy', 'Zhang', 4, 2),
('Sandy', 'Xie', 5, 3),
('Tom', 'Wang', 1, NULL),
('Ursula', 'Xu', 2, 1),
('Vicky', 'Wu', 3, 1);

