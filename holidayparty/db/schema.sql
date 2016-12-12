CREATE DATABASE holiday_party_db;
USE holiday_party_db;

CREATE TABLE clients(
id int NOT NULL AUTO_INCREMENT,
client_name VARCHAR(255) NOT NULL,
PRIMARY KEY(id)
);
CREATE TABLE holidayparty(
id int NOT NULL AUTO_INCREMENT,
party_name varchar(255) NOT NULL,
party_type varchar(100) NOT NULL,
party_cost INTEGER (10) NOT NULL,
client_id INT,
PRIMARY KEY (id),
FOREIGN KEY (client_id) REFERENCES clients(id)
);
INSERT INTO clients(client_name)
VALUES("Bilal"),("Brianne"),("Vincent");
INSERT INTO holidayparty(party_name, party_type, party_cost, client_id)
VALUES("Everybody Loves Raymond", "tv", 500, 1),
("Big Bang Theory", "tv", 900, 1), ("Top Gun", "movie", 200, 2),
("Whiskey", "grown-up", 300, 2),("Cigar", "grown-up", 250, 3);
SELECT * FROM holidayparty;