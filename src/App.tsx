import React from 'react';
import './App.css';
import Welcome from './pages/welcome';
import Intinerary from './pages/intinerary'

function App() {
  return (
    <React.Fragment>
      <Welcome />
      <Intinerary />
    </React.Fragment>
  );
}

export default App;
