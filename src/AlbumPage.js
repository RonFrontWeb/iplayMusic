import { Link } from '@reach/router';
import './AlbumPage.css';
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import TokenContext from "./TokenContext";

function AlbumPage({children}) {

   var [token] = useContext(TokenContext);
   var [content, setContent] = useState({});
 
   useEffect(function() {
     axios.get("https://api.spotify.com/v1/browse/featured-playlists", {
       headers: {
         "Authorization": "Bearer " + token.access_token
       }
     })
     .then(response => setContent(response.data));
   }, [token, setContent]);
   console.log(content);

 return (
    <div className="AlbumPage">
       
       <div className="AlbumPageImageTextContainer">
       <div className="AlbumPageTitleContainer">
            <h3 className="AlbumPageTitle">Featured Albums</h3>
            <Link to="/" className="AlbumPageLink">View All</Link>
         </div>
          <div className="AlbumPagecarousel">
       <img className="AlbumPageImage1" src={content.playlists?.items[0].images[0].url} alt="carasell"/>
       <img className="AlbumPageImage" src={content.playlists?.items[1].images[0].url} alt="carasell"/>
       <img className="AlbumPageImage2" src={content.playlists?.items[2].images[0].url} alt="carasell"/>
          </div>
          <div className="AlbumPageTitleContainer">
            <h3 className="AlbumPageTitle">New Releases</h3>
            <Link to="/" className="AlbumPageLink">View All</Link>
         </div>
       </div>
        {children}
       
    </div>
  );
}

export default AlbumPage;