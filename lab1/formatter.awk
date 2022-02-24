#finalizes data by adding rank column and reformats it into ranking order

BEGIN{
  FS = " "
}

{
  print sort -n > "lab1/notfinalOutput.csv"
}


END{

}
