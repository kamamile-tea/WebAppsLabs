all:
	awk -f lab1/carModif.awk lab1/data_lab1/data.csv
	@awk -f lab1/formatter.awk lab1/output.csv
