SQL

Structured Query Language

- SQL is a programming lanuage used to talk with databases

- Primary Key
    - Uniquely identifies row or record
    - Must be given a value when the row is created and that value can't be NULL
    - The original value can't be changed
    - It's probably best to auto increment the value of the key

- Atomic tables and table templating
    - Every table should focus on describing just one thing
    - After you decide the one thing your table will describe, then decide what things you need to describe that thing
    - Write out all the ways to desribe the thing and if any of those things requires multiple inputs, pull them out
    - Don't have multiple columns with the same sort of information
    - Don't include multiple values in one cell
    - Normalized tables

Numeric Types
    - TINYINT
    - SMALLINT
    - MEDIUM INT
    - INT
    - BIGINT
    - FLOAT
    - DOUBLE

String Types
    - CHAR
    - VARCHAR
    - BLOB
    - ENUM
    - SET (rarely used)

Date and Time Types
    - Date
    - Time
    - DATETIME
    - TIMESTAMP
    - YEAR

Foreign Key
    - Used to make references to the Primary Key of another table