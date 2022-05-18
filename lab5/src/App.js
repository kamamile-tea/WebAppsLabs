import React, { useState, useEffect } from 'react';
import './App.css';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';

import Display from './views/Display.js'
import Update from './views/Update.js'
import Insert from './views/Insert.js'
import ResponsiveAppBar from './components/ResponsiveAppBar.js'

function App() {

  return (
    <Router>
      <div className="App">
        <ResponsiveAppBar/>
      <Routes>
        <Route exact path='/Display' element={< Display />}></Route>
        <Route exact path='/Update' element={< Update />}></Route>
        <Route exact path='/Insert' element={< Insert />}></Route>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
