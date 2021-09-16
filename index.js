// mysql and database connection, require inquirer // 

const { prompt } = require('inquirer')
const { createConnection } = require('myslq2')
require('console.table')

const db = createConnection('mysql://root:rootroot@localhost/employees_db')

// starting of prompt and switch function // 
const init = () => {
  prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: ['Add Department', 'Add Role', 'Add Employee', 'View Departments', 'View Roles', 'View Employees', 'Update Employees']
    }
  ])
  .then(({action}) => {
    switch (action) {
      case 'Add Department':
        addDepartment()
        break;
      case 'Add Role':
        addRole()
        break;
      case 'Add Employee':
        addEmployee()
        break;
      case 'View Departments':
        viewDepartments()
        break;
      case 'View Roles':
        viewRoles()
        break;
      case 'View Employees':
        viewEmployees()
        break;
      case 'Update Employee':
        updateEmployee()
        break;
    }
  })
}