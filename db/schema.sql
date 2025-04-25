CREATE TABLE lyrics (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  lyrics TEXT,
  last_fetched DATETIME
);
