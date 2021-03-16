import { Link } from '@reach/router';
import { useContext } from 'react';
import DarkmodeContext from './DarkmodeContext';
import './PrimaryMenubar.css';

function PrimaryMenubar() {

  var [darkmodeState,setDarkmodeState] = useContext(DarkmodeContext)

function darkmode() {
  setDarkmodeState(!darkmodeState)
  
  // darkmodeState === true ? setDarkmodeState(false) : setDarkmodeState(true) 
  
  // if (darkmodeState === true) {
  //   setDarkmodeState(false)
  // }else {
  //   setDarkmodeState(true)
  // }

}



// console.log(darkmodeState)

 return (
    <div className="PrimaryMenubar">
          <Link to="/Album"><img src="/pulse.svg" alt="pulse"/></Link>
          <Link to="/playlists"><img src="/mic.svg" alt="playlists"/></Link>
          
          <Link to="/featured"><span className="PrimaryMenuBar__gradient"><img src="/wifi.svg" alt="featured"/></span></Link>
          <button onClick={darkmode} className="PrimaryMenubar__button"><img src="/contrast.svg" alt="dark mode"/></button>
          <Link to="/category"><img src="/wheel.svg" alt="category"/></Link>
    </div>
  );
}

export default PrimaryMenubar;