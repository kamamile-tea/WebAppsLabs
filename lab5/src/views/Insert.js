import React, { useState, useEffect } from 'react';
import '../App.css';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Insert() {
  const columns = ['Car_id', 'Year', 'Make', 'Model', 'Email', 'Timestamp'];

  const [apiResponse, setApiResponse] = useState({});
  const [done, setDone] = useState(false);

  const [car_id, setCar_id] = useState("");
  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [email, setEmail] = useState("");
  const [timestamp, setTimestamp] = useState("");

  let myBody =  {"carid": car_id, "year": year, "make": make, "model": model, "email": email, "timestamp": timestamp};

  let insertData = () => {
    const request = new Request('http://localhost:9000/api/cars', {method: 'POST', headers: new Headers({'content-type': 'application/json; charset=utf-8'}), body: JSON.stringify(myBody)});
    console.log(JSON.stringify(myBody));
    fetch(request)
        .then(response => response.json())
        .then(response => setApiResponse(response))
        .then(response => {
          console.log(apiResponse);
        })
      setDone(true);
  };

  let updateColumn = (e) => {
    let currentCol = e.target.parentElement.textContent;
    let input = e.target.value;

    if(currentCol === "Car_id"){
      setCar_id(input);
    }
    else if(currentCol === "Year"){
      setYear(input)
    }
    else if(currentCol === "Make"){
      setMake(input)
    }
    else if(currentCol === "Model"){
      setModel(input)
    }
    else if(currentCol === "Email"){
      setEmail(input)
    }
    else if(currentCol === "Timestamp"){
      setTimestamp(input)
    }
    else{
      console.log("THERE WAS NO COLUMN MATCH");
    }


    console.log("Card_id " + car_id);
    console.log(e.target.parentElement.textContent);
  }

  return (
    <div className="App">
      <header className="insert-form">
        {done ? <h1>Inserted succesfully</h1>: <h1>...</h1>}
        {columns.map((col) => (
          <TextField onChange = {updateColumn}
            key = {col}
            color = "secondary"
            id="standard-basic"
            label={col}
            variant="outlined"
            helperText = {"Insert value for " + col + " here: "}
          />
        ))}

        <Button href = "#" variant="contained" onClick = {insertData}>Insert</Button>

      </header>
    </div>
  );
}

export default Insert;
