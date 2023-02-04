import './App.css';
import ProfilePage from './Page/ProfilePage';
import SideBar from '../src/components/sideBar';
import AppTopBar from '../src/components/AppTopBar';
import Player from './components/Player';
import { Routes, Route } from 'react-router-dom';
import InvitePage from './Page/InvitePage';
function App() {
  return (
    <>
      <div className="app-top-bar">
        <AppTopBar />
      </div>
      <div className="side-nav-bar">
        <SideBar />
      </div>
      <div className="content-container">
          <Routes>
            <Route exact path='/' element={ <ProfilePage /> } />
            <Route exact path='/invite  ' element={ <InvitePage /> } />
          </Routes>
      </div>
      <div className="music-control-bar">
        <Player />
      </div>
    </>
  );
}

export default App;
