import { Link } from '@reach/router';
import './PrimaryMenubar.css';

function PrimaryMenubar() {
 return (
    <div className="PrimaryMenubar">
          <Link to="/pulse"><img src="/pulse.svg" alt="pulse"/></Link>
          <Link to="/mic"><img src="/mic.svg" alt="mic"/></Link>
          
          <Link to="/wifi"><span className="PrimaryMenuBar__gradient"><img src="/wifi.svg" alt="wifi"/></span></Link>
          <Link to="/contrast"><img src="/contrast.svg" alt="contrast"/></Link>
          <Link to="/wheel"><img src="/wheel.svg" alt="wheel"/></Link>
    </div>
  );
}

export default PrimaryMenubar;