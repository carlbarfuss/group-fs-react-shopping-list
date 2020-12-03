-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

CREATE TABLE list (
	id SERIAL PRIMARY KEY,	
    Name VARCHAR (80),
    Quantity DECIMAL(3,2),
    Unit VARCHAR (20),
    Purchased BOOLEAN default false
);

INSERT INTO "list" ("name", "quantity", "unit") VALUES ('Bananas', 1, 'bunch');
INSERT INTO "list" ("name", "quantity", "unit") VALUES ('Machete', 2, 'fathoms');
INSERT INTO "list" ("name", "quantity", "unit") VALUES ('Arsenic', .5, 'bundles');