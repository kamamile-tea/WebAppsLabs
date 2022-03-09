-- Kamille Tipan
-- CISC 3140

DROP TABLE IF EXISTS Judges;
DROP TABLE IF EXISTS Cars;
DROP TABLE IF EXISTS original;
DROP TABLE IF EXISTS extract1;
.headers off
.mode csv
.import lab_data/data.csv original

CREATE TABLE IF NOT EXISTS Judges AS SELECT judge_id, judge_name FROM original;


CREATE TABLE IF NOT EXISTS Cars(
	Car_id TEXT NOT NULL PRIMARY KEY,
	Year TEXT NOT NULL,
	Make TEXT NOT NULL,
	Model TEXT NOT NULL,
	Email TEXT NOT NULL,
	Timestamp TEXT NOT NULL);

INSERT INTO Cars SELECT car_id,year,make,model,email,timestamp FROM original;


CREATE TABLE IF NOT EXISTS Car_Score AS SELECT Car_ID,Racer_Turbo,
	Racer_Supercharged,Racer_Performance,Racer_Horsepower,
	Car_Overall,Engine_Modifications,Engine_Performance,
	Engine_Chrome,Engine_Detailing,Engine_Cleanliness,
	Body_Frame_Undercarriage,Body_Frame_Suspension,
	Body_Frame_Chrome,Body_Frame_Detailing,
	Body_Frame_Cleanliness,Mods_Paint,
	Mods_Body,Mods_Wrap,Mods_Rims,
	Mods_Interior,Mods_Other,
	Mods_ICE,Mods_Aftermarket,
	Mods_WIP,Mods_Overall
FROM original;



CREATE TABLE IF NOT EXISTS extract1 AS SELECT car_id,year,make,model,(
	Racer_Turbo+
	Racer_Supercharged+Racer_Performance+Racer_Horsepower+
	Car_Overall+Engine_Modifications+Engine_Performance+
	Engine_Chrome+Engine_Detailing+Engine_Cleanliness+
	Body_Frame_Undercarriage+Body_Frame_Suspension+
	Body_Frame_Chrome+Body_Frame_Detailing+
	Body_Frame_Cleanliness+Mods_Paint+
	Mods_Body+Mods_Wrap+Mods_Rims+
	Mods_Interior+Mods_Other+
	Mods_ICE+Mods_Aftermarket+
	Mods_WIP+Mods_Overall) AS Total FROM original ORDER BY Total DESC;

ALTER TABLE extract1 ADD COLUMN ranking TEXT;

UPDATE extract1 SET ranking = rowid;

.mode csv
.headers ON
.output extract1.csv
SELECT * FROM extract1;
.output stdout
