import { Link } from '@reach/router';
import './PrimaryMenubar.css';

function PrimaryMenubar() {
 return (
    <div className="PrimaryMenubar">
          <Link to="/Album"><img src="/pulse.svg" alt="pulse"/></Link>
          <Link to="/playlists"><img src="/mic.svg" alt="playlists"/></Link>
          
          <Link to="/featured"><span className="PrimaryMenuBar__gradient"><img src="/wifi.svg" alt="featured"/></span></Link>
          <Link to="/player"><img src="/contrast.svg" alt="contrast"/></Link>
          <Link to="/category"><img src="/wheel.svg" alt="category"/></Link>
    </div>
  );
}

export default PrimaryMenubar;