DROP DATABASE IF EXSISTS 'EMPLOYEE_DB';
CREATE DATABASE 'EMPLOYEE_DB';

CREATE TABLE 'department' (
    'id' SERIAL PRIMARY KEY,
    'name' VARCHAR(30) UNIQUE NOT NULL
);

CREATE TABLE 'role' (
    'id' SERIAL PRIMARY KEY,
    'title' VARCHAR(30) UNIQUE NOT NULL,
    'salary' DECIMAL NOT NULL
    'department_id' VARCHAR(30) UNIQUE NOT NULL,
    references: 'department'('id')
);

CREATE TABLE 'employee' (
    'id' SERIAL PRIMARY KEY,
    'first_name' VARCHAR(30) NOT NULL,
    'last_name' VARCHAR(30) NOT NULL,
    'role_id' INTEGER NOT NULL,
    references: 'role'('id'),
    'manager_id' INTEGER,
    references: 'employee'('id')
    );