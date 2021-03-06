import { Link } from '@reach/router';
import './SecondaryMenubar.css';

function SecondaryMenubar(props) {
  var classstring ="";
  if (props.background === true ) {
    classstring = "backgroundWhite";
  }
 return (
    <div className={`SecondaryMenubar ${classstring}`} >
          <button onClick={function () {
            window.history.back();
          }} to="/Aback"><svg xmlns="http://www.w3.org/2000/svg" width="8.576" height="15" viewBox="0 0 8.576 15">
  <path id="_ionicons_svg_ios-arrow-back" className="cls-1" d="M162.593,95.585l5.676-5.671a1.072,1.072,0,0,0-1.518-1.514l-6.43,6.426a1.07,1.07,0,0,0-.031,1.478l6.457,6.47a1.072,1.072,0,0,0,1.518-1.514Z" transform="translate(-160.008 -88.087)"/>
</svg>
</button>
          <h1 className="SecondaryMenubarTitle">{props.title}</h1>
          <Link to="/search"><svg xmlns="http://www.w3.org/2000/svg" width="14.996" height="15" viewBox="0 0 14.996 15">
  <path id="_ionicons_svg_ios-search" className="cls-1" d="M78.82,77.814,74.65,73.6a5.944,5.944,0,1,0-.9.914L77.891,78.7a.642.642,0,0,0,.906.023A.646.646,0,0,0,78.82,77.814Zm-8.841-3.245A4.693,4.693,0,1,1,73.3,73.194,4.664,4.664,0,0,1,69.979,74.569Z" transform="translate(-64 -63.9)"/>
</svg>
</Link>
    </div>
  );
}

export default SecondaryMenubar;