lab1:
	awk -f lab_1/carModif.awk lab_1/data_lab1/data.csv
	@awk -f lab_1/formatter.awk lab_1/output.csv
