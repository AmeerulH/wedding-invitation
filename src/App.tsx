import React from 'react';
import './App.css';
import Welcome from './pages/welcome';
import Intinerary from './pages/intinerary'
import IconsPage from './pages/icons-page';

function App() {
  return (
    <React.Fragment>
      <Welcome />
      <Intinerary />
      <IconsPage />
    </React.Fragment>
  );
}

export default App;
