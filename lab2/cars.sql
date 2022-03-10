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


-- Problem 2 part 1
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

-- Problem 2 part 2
.mode csv
.headers ON
.output extract2.csv
select * from extract1 where make='Subaru' order by total desc limit 3;
.headers OFF
select * from extract1 where make='Honda' order by total desc limit 3;
select * from extract1 where make='Toyota' order by total desc limit 3;
select * from extract1 where make='Acura' order by total desc limit 3;
select * from extract1 where make='Audi' order by total desc limit 3;
select * from extract1 where make='Bmw' order by total desc limit 3;
select * from extract1 where make='Chevy' order by total desc limit 3;
select * from extract1 where make='Chrystler' order by total desc limit 3;
select * from extract1 where make='Dodge' order by total desc limit 3;
select * from extract1 where make='Ford' order by total desc limit 3;

select * from extract1 where make='Hyundai' order by total desc limit 3;
select * from extract1 where make='Infiniti' order by total desc limit 3;
select * from extract1 where make='Jeep' order by total desc limit 3;
select * from extract1 where make='Lexus' order by total desc limit 3;
select * from extract1 where make='Mazda' order by total desc limit 3;
select * from extract1 where make='Mercedes' order by total desc limit 3;
select * from extract1 where make='Mitsu' order by total desc limit 3;
select * from extract1 where make='Nissan' order by total desc limit 3;
select * from extract1 where make='Scion' order by total desc limit 3;
select * from extract1 where make='Volkswagen' order by total desc limit 3;
select * from extract1 where make='Volvo' order by total desc limit 3;
.output stdout


--Problem 3
.headers on
.mode columns
.print Problem 3 fields
-- count
select judge_name,count(judge_name) AS cars_judged from judges group by judge_name;

-- start
select min(timestamp) from original AS the_start;

-- end
select max(timestamp) from original AS the_end;

--average
SELECT (MAX(timestamp)-MIN(timestamp)) / count(judge_name) FROM original AS the_avg;
