import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import ResponsiveAppBar from './components/ResponsiveAppBar.js'
import Table from './components/Table.js'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SelectionList from './components/SelectionList.js'

const columns = ['money', 'when', 'of', 'course'];
const operators = ['==', '<', '>']

function App() {
  const [apiResponse, setApiResponse] = useState({});

  let callAPI = () => {
      fetch("http://localhost:9000/api/cars")
          .then(response => response.json())
          .then(response => setApiResponse(response));
  };

  useEffect(() => {    callAPI();  });

  return (
    <div className="App">
      <ResponsiveAppBar/>
      <section>
        <p> { JSON.stringify(apiResponse.data[0])} </p>
      </section>
      <header className="App-header">
        <Button href = "#" variant="contained">Display All</Button>

        <p>Or Display where </p>

        <SelectionList options = { columns } title = "Column Name" />

        <p>Or Display where </p>

        <SelectionList options = { operators } title = "Operator"/>

        <TextField color = "secondary" id="standard-basic" label="Type here" variant="outlined" helperText = "Enter your query here" />

        <Button href = "#" variant="contained">Display your query</Button>
      </header>
      <section>
        <Table/>
      </section>
    </div>
  );
}

export default App;
