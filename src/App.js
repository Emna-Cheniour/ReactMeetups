import { Route  } from 'react-router-dom';
import { Routes } from 'react-router';
import AllMeetupPage from './pages/AllMeetups';
import FavouritesPage from './pages/Favourites';
import NewMeetupPage from './pages/NewMeetup';
import Layout from './components/layout/Layout'
function App() {
  return (
    <Layout>
      <Routes>
      <Route path='/' element={<AllMeetupPage />} />
      <Route path='/new-meetup' element={ <NewMeetupPage />} />
      <Route path='/favourites' element={<FavouritesPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
