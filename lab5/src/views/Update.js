import React, { useState, useEffect } from 'react';
import '../App.css';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import SelectionList from '../components/SelectionList.js'

function Update() {
  const columns = ['Car_id', 'Year', 'Make', 'Model', 'Email', 'Timestamp'];
  const operators = ['==', '<', '>']

  const [apiResponse, setApiResponse] = useState({});
  const [done, setDone] = useState(false);
  const [colSelection, setColSelection] = useState("");
  const [operSelection, setOperSelection] = useState("");
  const [query, setQuery] = useState("");

  const [car_id, setCar_id] = useState("");
  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [email, setEmail] = useState("");
  const [timestamp, setTimestamp] = useState("");

  let myBody =  {"carid": car_id, "year": year, "make": make, "model": model, "email": email, "timestamp": timestamp};

  let updateData = () => {
    const request = new Request("http://localhost:9000/api/cars/" + colSelection + "/" + operSelection + "/" + query, {method: 'PUT', headers: new Headers({'content-type': 'application/json; charset=utf-8'}), body: JSON.stringify(myBody)});
    console.log(JSON.stringify(myBody));
    fetch(request)
        .then(response => response.json())
        .then(response => setApiResponse(response))
        .then(response => {
          console.log(apiResponse);
        })
      setDone(true);
  };

  let handleColChange = (col) => {
    console.log("Handle Col Change: ");
    console.log(col);
    setColSelection(col);
  }

  let handleOperChange = (oper) => {
    console.log("Handle Oper Change: ");
    console.log(oper);
    setOperSelection(oper);
  }

  let handleQueryChange = (e) => {
    console.log("Handle Query Change: ");
    console.log(e.target.value);
    setQuery(e.target.value);
  }

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
      <section className = "message-head">
        {done ? <h1>Updated succesfully</h1>: <h1>...</h1>}
      </section>
      <header className="App-header">

        <p>Display where </p>
        <SelectionList onSelectionChange = {handleColChange} options = { columns } title = "Column Name" />

        <SelectionList onSelectionChange = {handleOperChange} options = { operators } title = "Operator"/>

        <TextField onChange = {handleQueryChange} color = "secondary" id="standard-basic" label="Type here" variant="outlined" helperText = "Enter your query here" />

      </header>
      <section className="insert-form">
        {columns.map((col) => (
          <TextField onChange = {updateColumn}
            key = {col}
            color = "secondary"
            id="standard-basic"
            label={col}
            variant="outlined"
            helperText = {"Update value for " + col + " here: "}
          />
        ))}

        <Button href = "#" variant="contained" onClick = {updateData}>Update</Button>
      </section>
    </div>
  );
}

export default Update;
