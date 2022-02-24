#finalizes data by adding rank column and reformats it into ranking order

BEGIN{
  FS = " "
}

{
  print sort -n > "lab_1/notfinalOutput.csv"
}


END{

}
