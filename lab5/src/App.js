import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import ResponsiveAppBar from './components/ResponsiveAppBar.js'
import Table from './components/Table.js'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SelectionList from './components/SelectionList.js'

const columns = ['Car_id', 'Year', 'Make', 'Model', 'Email', 'Timestamp'];
const operators = ['==', '<', '>']

function App() {
  const [apiResponse, setApiResponse] = useState({});
  const [displayTable, setDisplayTable] = useState(false);
  const [colSelection, setColSelection] = useState("");
  const [operSelection, setOperSelection] = useState("");
  const [query, setQuery] = useState("");

  let displayAll = () => {
      fetch("http://localhost:9000/api/cars")
          .then(response => response.json())
          .then(response => setApiResponse(response))
          .then(response => {
            setDisplayTable(true);
            console.log(apiResponse);
          })
  };

  let displayQuery = () => {
    fetch("http://localhost:9000/api/cars/" + colSelection + "/" + operSelection + "/" + query)
        .then(response => response.json())
        .then(response => setApiResponse(response))
        .then(response => {
          setDisplayTable(true);
          console.log(apiResponse);
        })
  }

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

  return (
    <div className="App">
      <ResponsiveAppBar/>
      <header className="App-header">
        <Button href = "#" variant="contained" onClick = {displayAll}>Display All</Button>

        <p>Or Display where </p>

        <SelectionList onSelectionChange = {handleColChange} options = { columns } title = "Column Name" />

        <SelectionList onSelectionChange = {handleOperChange} options = { operators } title = "Operator"/>

        <TextField onChange = {handleQueryChange} color = "secondary" id="standard-basic" label="Type here" variant="outlined" helperText = "Enter your query here" />

        <Button href = "#" variant="contained" onClick = {displayQuery}>Display your query</Button>
      </header>
      <section>
        {displayTable ? <Table rows = {apiResponse.data}/> : <p></p>}
      </section>
    </div>
  );
}

export default App;
