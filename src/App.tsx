import React from 'react';
import Welcome from './pages/welcome';
import Intinerary from './pages/intinerary'
import IconsPage from './pages/icons-page';
import SaveTheDate from './pages/save-the-date';
import './App.css';
import Enquiries from './pages/enquiries';
import Rsvp from './pages/rsvp';

function App() {
  return (
    <React.Fragment>
      <Welcome />
      <Intinerary />
      <IconsPage />
      <SaveTheDate />
      <Enquiries />
      <Rsvp />
    </React.Fragment>
  );
}

export default App;
