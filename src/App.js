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
import DarkmodeContext from './DarkmodeContext';


function App() {

  var tokenState = useState(null);
  var darkmodeState = useState(false);
  console.log(darkmodeState[0])

  var darkmodeStyle = null

  if (darkmodeState[0] === true) {
    darkmodeStyle = (
      <style>
      {`
        :root {
          --white: #341931;
          --menubar: #111625;
          --darkPurple:#FFFFFF;
          --loginPage: #FF1168;
          --loginDark:#FFFFFF;
          --touchDark:#FD4D8E;
          --loginIconDark:invert(100%)
        }
        `}
      </style>
    )
  }
  
  return (
    <TokenContext.Provider value={tokenState}>
      <DarkmodeContext.Provider value={darkmodeState}>
        {darkmodeStyle}

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
    </DarkmodeContext.Provider>
  </TokenContext.Provider>
  );
}

export default App;

