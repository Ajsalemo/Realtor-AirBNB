-- Create table statement
CREATE TABLE
IF NOT EXISTS users
(
    id INT AUTO_INCREMENT PRIMARY KEY,
    uid INT NOT NULL,
    username VARCHAR
(255) NOT NULL
);