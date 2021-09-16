const { prompt } = require('inquirer')
const { createConnection } = require('myslq2')
require('console.table')

const db = createConnection('mysql://root:rootroot@localhost/employees_db')

