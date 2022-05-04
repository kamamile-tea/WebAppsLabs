-- Kamille Tipan
-- CISC 3140

DROP TABLE IF EXISTS Judges;
DROP TABLE IF EXISTS Cars;
DROP TABLE IF EXISTS original;
.headers off
.mode csv
.import data/data.csv original

CREATE TABLE IF NOT EXISTS Judges AS SELECT judge_id, judge_name FROM original;


CREATE TABLE IF NOT EXISTS Cars(
	Car_id TEXT NOT NULL PRIMARY KEY,
	Year TEXT NOT NULL,
	Make TEXT NOT NULL,
	Model TEXT NOT NULL,
	Email TEXT NOT NULL,
	Timestamp TEXT NOT NULL);

INSERT INTO Cars SELECT car_id,year,make,model,email,timestamp FROM original;
