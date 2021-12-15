import {React} from 'react';
import './App.css';
import Grid from './Grid';
import Legend from './Legend'
import AppProvider from './context/AppProvider';

const App = () => {

  return (
    <AppProvider>
      <div className="App">
        <Legend/>
        <Grid/>
      </div>
    </AppProvider>
  );
}

export default App;
