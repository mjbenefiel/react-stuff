CREATE DATABASE test4_db;

CREATE TABLE student(
    first_name VARCHAR (30) NOT NULL,
    last_name VARCHAR (30) NOT NULL,
    email VARCHAR(60) NULL,
    street VARCHAR(50) NOT NULL,
    city VARCHAR(40) NOT NULL,
    state CHAR(2) NOT NULL DEFAULT "CA",
    zip MEDIUMINT UNSIGNED NOT NULL,
    phone VARCHAR(20) NOT NULL,
    birth_date DATE NOT NULL,
    sex ENUM ("M", "F") NOT NULL,
    date_entered TIMESTAMP,
    lunch_cost FLOAT NULL,
    student_id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY
)