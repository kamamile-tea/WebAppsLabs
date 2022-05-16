import logo from './logo.svg';
import './App.css';

import ResponsiveAppBar from './components/ResponsiveAppBar.js'
import Button from '@mui/material/Button';
import SelectionList from './components/SelectionList.js'

const columns = ['money', 'when', 'of', 'course'];
const operators = ['==', '<', '>']

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <header className="App-header">
        <Button href = "#" variant="contained">Display All</Button>

        <p>Or Display where </p>

        <SelectionList options = { columns } title = "Column Name" />

        <p>Or Display where </p>

        <SelectionList options = { operators } title = "Operator"/>


      </header>
      <section>
      </section>
    </div>
  );
}

export default App;
