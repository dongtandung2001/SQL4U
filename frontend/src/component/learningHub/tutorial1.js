export const tutorial = [
    
    {
      _id: "80101",
      title: "Introduction",
      content:[
          { header: "Databases",
          detail: `Fields and records make up a table\nOne or more tables make up a database` },
  
          { header: "Databases vs. Spreadsheets",
          detail: `Both store data fields and records
          Database tables can have specific relationships to each other
          Programming Foundations: Databases
          Databases allow us to manage data and ask questions about data` },
  
          { header: "SQL",
          detail: `Write a question a computer can understand
          Express what you mean explicitly
          Often is a series of smaller Questions
          Adopted into many DBMSs` },
  
          { header: "SQL Statements",
          detail: `A SQL statement is any SQL code that takes some kind of Application
          A SQL query is any statement that returns records` },
      ]
    },
    {
      _id: "80102",
      title: "Ask for Data from a Database",
  
      content: [
        { header: "Ask for data with SELECT", detail: ` ` },
        {
          header: "The SQL SELECT Statement",
          detail: `The SELECT statement is used to select data from a database. 
      The data returned is stored in a result table, called the result-set.`,
        },
        {
          header: "SELECT Syntax",
          detail: `SELECT column1, column2, ...
      FROM table_name;`,
        },
        {
          header: "The SQL SELECT DISTINCT Statement",
          detail: `The SELECT DISTINCT statement is used to return only distinct (different) values.
      Inside a table, a column often contains many duplicate values; and sometimes you only want to list the different (distinct) values.`,
        },
        {
          header: "SELECT DISTINCT Syntax",
          detail: `SELECT DISTINCT column1, column2, ...
      FROM table_name;`,
        },
  
        { header: "Narrow down a query with WHERE", detail: ` ` },
        {
          header: "The SQL WHERE Clause",
          detail: `The WHERE clause is used to filter records.
      It is used to extract only those records that fulfill a specified condition.`,
        },
        {
          header: "WHERE Syntax",
          detail: `SELECT column1, column2, ...
      FROM table_name
      WHERE condition;`,
        },
  
        { header: "Adding more criteria", detail: ` ` },
        {
          header: "The SQL AND, OR and NOT Operators",
          detail: `The WHERE clause can be combined with AND, OR, and NOT operators.
      The AND and OR operators are used to filter records based on more than one condition:
      The AND operator displays a record if all the conditions separated by AND are TRUE.
      The OR operator displays a record if any of the conditions separated by OR is TRUE.
      The NOT operator displays a record if the condition(s) is NOT TRUE.`,
        },
        {
          header: "AND Syntax",
          detail: `SELECT column1, column2, ...
      FROM table_name
      WHERE condition1 AND condition2 AND condition3 ...;`,
        },
        {
          header: "OR Syntax",
          detail: `SELECT column1, column2, ...
      FROM table_name
      WHERE condition1 OR condition2 OR condition3 ...;`,
        },
        {
          header: "NOT Syntax",
          detail: `SELECT column1, column2, ...
      FROM table_name
      WHERE NOT condition;`,
        },
        {
          header: "Combining AND, OR and NOT",
          detail: `You can also combine the AND, OR and NOT operators.`,
        },
  
        { header: "Broadening and limiting responses", detail: ` ` },
        {
          header: "The SQL LIKE Operator",
          detail: `The LIKE operator is used in a WHERE clause to search for a specified pattern in a column.
      There are two wildcards often used in conjunction with the LIKE operator:
      The percent sign (%) represents zero, one, or multiple characters
      The underscore sign (_) represents one, single character `,
        },
        {
          header: "LIKE Syntax",
          detail: `SELECT column1, column2, ...
      FROM table_name
      WHERE columnN LIKE pattern;`,
        },
  
        { header: "Organize responses with ORDER BY", detail: ` ` },
        {
          header: "The SQL ORDER BY Keyword",
          detail: `The ORDER BY keyword is used to sort the result-set in ascending or descending order.
       The ORDER BY keyword sorts the records in ascending order by default. To sort the records in descending order, use the DESC keyword.`,
        },
        {
          header: "ORDER BY Syntax",
          detail: `SELECT column1, column2, ...
        FROM table_name
        ORDER BY column1, column2, ... ASC|DESC;`,
        },
        
      ],
    },
    { _id : "80103",
  title: "Ask for Data from Two or More Tables",
  content: [
      {
          header: "SQL JOIN",
          detail: `A JOIN clause is used to combine rows from two or more tables, based on a related column between them.`
      },
      { 
          header: "Different Types of SQL JOINs",
          detail: `(INNER) JOIN: Returns records that have matching values in both tables
          LEFT (OUTER) JOIN: Returns all records from the left table, and the matched records from the right table
          RIGHT (OUTER) JOIN: Returns all records from the right table, and the matched records from the left table
          FULL (OUTER) JOIN: Returns all records when there is a match in either left or right table`
      },
      {
          header: "SQL INNER JOIN Keyword",
          detail: `The INNER JOIN keyword selects records that have matching values in both tables.`,
      },
      {
          header: "INNER JOIN Syntax",
          detail: `SELECT column_name(s)
          FROM table1
          INNER JOIN table2
          ON table1.column_name = table2.column_name;`,
      },
      {
          header: "SQL LEFT JOIN Keyword",
          detail: `The LEFT JOIN keyword returns all records from the left table (table1), and the matching records from the right table (table2). The result is 0 records from the right side, if there is no match.`,
      },
      {
          header: "LEFT JOIN Syntax",
          detail: `SELECT column_name(s)
          FROM table1
          LEFT JOIN table2
          ON table1.column_name = table2.column_name;`,
      },
      {
          header: "SQL RIGHT JOIN Keyword",
          detail: `The RIGHT JOIN keyword returns all records from the right table (table2), and the matching records from the left table (table1). The result is 0 records from the left side, if there is no match.`,
      },
      {
          header: "RIGHT JOIN Syntax",
          detail: `SELECT column_name(s)
          FROM table1
          RIGHT JOIN table2
          ON table1.column_name = table2.column_name;`,
      },
      {
          header: "SQL FULL OUTER JOIN Keyword",
          detail: `The FULL OUTER JOIN keyword returns all records when there is a match in left (table1) or right (table2) table records.
          Tip: FULL OUTER JOIN and FULL JOIN are the same.`,
      },
      {
          header: "FULL OUTER JOIN Syntax",
          detail: `SELECT column_name(s)
          FROM table1
          FULL OUTER JOIN table2
          ON table1.column_name = table2.column_name
          WHERE condition;`,
      },
      {
          header: "SQL Self Join",
          detail: `A self join is a regular join, but the table is joined with itself.`,
      },
      {
          header: "Self Join Syntax",
          detail: `SELECT column_name(s)
          FROM table1 T1, table1 T2
          WHERE condition;`,
      },
  ]
   },
   {
      _id: "80104", 
      title: "Data Types, Math, and Helpful Features",
      content: [
          {
              header: "Data types in SQL",
              detail: `The kind of data stored in a field
              Can be text, numeric, binary, and so on.
              Certain operations are not possible with certain types
              + Binary types: store short/long binary sequences
              + Date and time types: store a value that should be treated as date/time data
              + Number types: stores values as integers of various lengths, floating-point numbers, and so on
              + Text types: store values intended to be used as text strings in. Fixed or variable numbers of characters
              + Boolean type: stores a true or false value
              + Null: represents a field having no value in it whatsoever. Not the same as false, no, or zero`,
          },
          {
              header: "Math in SQL",
              detail: `Most basic: use a SELECT statement, such as SELECT 4+2
              Supports arithmetic operations: +, -, *, /, and %.
              Assumes integer operations unless otherwise specified
              Supports comparison operations: >,<,>=,<=,=<,!=,or<>`
  
          },
          {
              header: "SQL Logical Operators",
              detail: `ALL: TRUE if all of the subquery values meet the condition
              AND: TRUE if all the conditions separated by AND is TRUE
              ANY: TRUE if any of the subquery values meet the condition
              BETWEEN: TRUE if the operand is within the range of comparisons
              EXISTS: TRUE if the subquery returns one or more records
              IN: TRUE if the operand is equal to one of a list of expressions
              LIKE: TRUE if the operand matches a pattern
              NOT: Displays a record if the condition(s) is NOT TRUE
              OR: TRUE if any of the conditions separated by OR is TRUE
              SOME: TRUE if any of the subquery values meet the condition`
          },
          {
              header: "Creating aliases with AS",
              detail: `SQL aliases are used to give a table, or a column in a table, a temporary name.
              Aliases are often used to make column names more readable.
              An alias only exists for the duration of that query.
              An alias is created with the AS keyword.`
  
          },
          {
              header: "Alias Column Syntax",
              detail: `SELECT column_name AS alias_name
              FROM table_name;`
          },
          {
              header: "Alias Table Syntax",
              detail: `SELECT column_name(s)
              FROM table_name AS alias_name;`
          },
      ]
   },
   {
      _id: "80105", 
      title: "Add or Modify Data",
      content: [
          {
              header: "Add data to a table",
              detail: ``
          },
          {
              header: "The SQL INSERT INTO Statement",
              detail: `The INSERT INTO statement is used to insert new records in a table.`
          },
          {
              header: "INSERT INTO Syntax",
              detail: `It is possible to write the INSERT INTO statement in two ways:
              1. Specify both the column names and the values to be inserted:
              INSERT INTO table_name (column1, column2, column3, ...)
              VALUES (value1, value2, value3, ...);
  
              2. If you are adding values for all the columns of the table, you do not need to specify the column names in the SQL query. However, make sure the order of the values is in the same order as the columns in the table. Here, the INSERT INTO syntax would be as follows:
              INSERT INTO table_name
              VALUES (value1, value2, value3, ...);`
          },
          {
              header: "Modify data in a table",
              detail: ``
          },
          {
              header: "The SQL UPDATE Statement",
              detail: `The UPDATE statement is used to modify the existing records in a table.`
          },
          {
              header: "UPDATE Syntax",
              detail: `UPDATE table_name
              SET column1 = value1, column2 = value2, ...
              WHERE condition;`
          },
          {
              header: "Removing data from a table",
              detail: ``
          },
          {
              header: "The SQL DELETE Statement",
              detail: `The DELETE statement is used to delete existing records in a table.`
          },
          {
              header: "DELETE Syntax",
              detail: `DELETE FROM table_name WHERE condition;`
          },
      ]
   },
   { _id: "80106", title: "Conclusion",
content: [
    {
        header: "The SQL UPDATE Statement",
        detail: `The UPDATE statement is used to modify the existing records in a table.`
    },
]}
  ];