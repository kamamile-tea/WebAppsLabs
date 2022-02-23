BEGIN{
  FS = ","
  print "Total" > "output.csv"
}

{
  for(i=8;i<=NF;++i)
    total+=$i
    print total
    $(NF+1)  = total
    total = 0
}

{
  print $NF,$7,$4,$5,$6  > "output.csv"
}

END{

}
