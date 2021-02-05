import './App.css';
import { Router } from "@reach/router";
import "./variables.css"
import Playlist from './pages/Playlist';
import Featured from './pages/Featured';
import Category from './pages/Category';
import PlayerPage from './PlayerPage';
import Album from './pages/Album';
import TokenContext from './TokenContext';
import { useState } from 'react';
import Login from './pages/Login';
import Callback from './pages/Callback';


function App() {

  var tokenState = useState(null);


  return (
    <TokenContext.Provider value={tokenState}>
      <Router>
        <Login default/>
        <Callback path="/callback" />
        {(function () { 

          if(tokenState[0]?.access_token) {
            return (
              <>
                <PlayerPage path="/player/:id"/>
                <Featured path="/featured"/>
                <Category path="/category"/>
                <Playlist path="/playlists"/>
                <Playlist path="/playlists/:id"/>
                <Album path="/Album"/>
              </>
            )           
          }
        }())}
      </Router>
  </TokenContext.Provider>
  );
}

export default App;

