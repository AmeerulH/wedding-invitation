import Welcome from './pages/welcome';
import Intinerary from './pages/intinerary'
import IconsPage from './pages/icons-page';
import SaveTheDate from './pages/save-the-date';
import Enquiries from './pages/enquiries';
import Rsvp from './pages/rsvp';
import ThankYou from './pages/thank-you';
import PhotosPage from './pages/photos-page';
import LandscapeBlocker from './components/landscape-blocker';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

AOS.init();

function App() {
  return (
    <div className='app'>
      <LandscapeBlocker />
      <Welcome />
      <Intinerary />
      <PhotosPage />
      <IconsPage />
      <SaveTheDate />
      <Enquiries />
      <Rsvp />
      <ThankYou />
    </div>
  );
}

export default App;
