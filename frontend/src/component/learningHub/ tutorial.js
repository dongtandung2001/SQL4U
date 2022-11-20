export const data = [
    /* https://www.linkedin.com/learning/learning-sql-programming-8382385/challenge-retrieve-data-from-the-database?autoplay=true&resume=false&u=2071660  */
    {_id: "1", 
    title: " Ask for Data from a Database",
content: [
    {header: "Ask for data with SELECT", detail: ` `},
    {header: "The SQL SELECT Statement", detail: `The SELECT statement is used to select data from a database. 
    The data returned is stored in a result table, called the result-set.`},
    {header: "SELECT Syntax", detail: `SELECT column1, column2, ...
    FROM table_name;`},
    {header: "The SQL SELECT DISTINCT Statement", detail: `The SELECT DISTINCT statement is used to return only distinct (different) values.
    Inside a table, a column often contains many duplicate values; and sometimes you only want to list the different (distinct) values.`},
    {header: "SELECT DISTINCT Syntax", detail: `SELECT DISTINCT column1, column2, ...
    FROM table_name;`},

    {header: "Narrow down a query with WHERE", detail: ` `},
    {header: "The SQL WHERE Clause", detail: `The WHERE clause is used to filter records.
    It is used to extract only those records that fulfill a specified condition.`},
    {header: "WHERE Syntax", detail: `SELECT column1, column2, ...
    FROM table_name
    WHERE condition;`},

    {header: "Adding more criteria", detail: ` `},
    {header: "The SQL AND, OR and NOT Operators", detail: `The WHERE clause can be combined with AND, OR, and NOT operators.
    The AND and OR operators are used to filter records based on more than one condition:
    The AND operator displays a record if all the conditions separated by AND are TRUE.
    The OR operator displays a record if any of the conditions separated by OR is TRUE.
    The NOT operator displays a record if the condition(s) is NOT TRUE.`},
    {header: "AND Syntax", detail: `SELECT column1, column2, ...
    FROM table_name
    WHERE condition1 AND condition2 AND condition3 ...;`},
    {header: "OR Syntax", detail: `SELECT column1, column2, ...
    FROM table_name
    WHERE condition1 OR condition2 OR condition3 ...;`},
    {header: "NOT Syntax", detail: `SELECT column1, column2, ...
    FROM table_name
    WHERE NOT condition;`},
    {header: "Combining AND, OR and NOT", detail: `You can also combine the AND, OR and NOT operators.`},

    {header: "Broadening and limiting responses", detail: ` `},
    {header: "The SQL LIKE Operator", detail: `The LIKE operator is used in a WHERE clause to search for a specified pattern in a column.
    There are two wildcards often used in conjunction with the LIKE operator:
     The percent sign (%) represents zero, one, or multiple characters
     The underscore sign (_) represents one, single character `},
     {header: "LIKE Syntax", detail: `SELECT column1, column2, ...
     FROM table_name
     WHERE columnN LIKE pattern;`},
    
     {header: "Organize responses with ORDER BY", detail: ` `},
     {header: "The SQL ORDER BY Keyword", detail: `The ORDER BY keyword is used to sort the result-set in ascending or descending order.
     The ORDER BY keyword sorts the records in ascending order by default. To sort the records in descending order, use the DESC keyword.`},
      {header: "ORDER BY Syntax", detail: `SELECT column1, column2, ...
      FROM table_name
      ORDER BY column1, column2, ... ASC|DESC;`},
    ]}
]
export const tutorial = [
    {id: "1", title: "Introduction", 
    content: ["An introduction to database foundations", 
    'What you should know',
]},
    {id: "2", title: 'Database Core Concepts', content: ['What is a database?', 
    'Storing data efficiently', 'Relational database management systems',
    'The client-server model'
]},
    {id: "3", title: 'Set up a Database Playground', content: [
    'Purpose of the Playground', 
    'Install Docker',
    'Database server containers',
    'RDBMS command-line interfaces'
]},
    {id: "4", title: 'Graphical Interfaces', content: [
    'Management interfaces', 
    'Install Azure Data Studio',
    'Connect to a database server',
    'Explore the servers contents',
    'Create database'

]},
    {id: "5", title: 'Create a Table Objects', content: [
    'Structured Query Language', 
    'Organize a database with schemas',
    'Table columns',
    'Create tables',
    'Alter tables',
    'Reserved keywords'
]},
    {id: "6", title: 'Add Data to a Table', content: [
    'Table rows', 
    'Add records',
    'Update and deleete records',
    'Saving and using SQL scripts'
]},
    {id: "7", title: 'Retrieve Information', content: [
    'Querying data', 
    'Return data with SELECT and FROM tables',
    'FIlter row with WHERE',
    'Sort values with ORDER BY',
    'Combine data with JOIN',
    'Limiting the number of rows returned'
]},
    {id: "8", title: 'Manipulate Data', content: [
    'Display column aliases with AS', 
    'Mathematical operations',
    'Use built-in functions',
    'Aggregate data with GROUP BY',
    'Filtering groups with HAVING'
]},
    {id: "9", title: 'Conclusion', content: ['Next steps']}
]