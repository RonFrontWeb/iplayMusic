import { Link } from '@reach/router';
import './SecondaryMenubar.css';

function SecondaryMenubar() {
 return (
    <div className="SecondaryMenubar">
          <Link to="/Aback"><img src="/Aback.svg" alt="arrow back"/></Link>
          <h1 className="SecondaryMenubarTitle">Title</h1>
          <Link to="/search"><img src="/search.svg" alt="search"/></Link>
    </div>
  );
}

export default SecondaryMenubar;