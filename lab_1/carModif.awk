#creates the necessary table to clean up and finalize the appropraite ouput file
BEGIN{
  FS = ","
  print "Total" > "lab_1/output.csv"
}

{
  for(i=8;i<=NF;++i)
    total+=$i
    print total
    $(NF+1)  = total
    total = 0
}

{
  print $NF,$7,$4,$5,$6  > "lab_1/output.csv"
}

END{

}
