import MainContent from './MainContent';
import './PlayListPage.css';
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import TokenContext from "./TokenContext";

function PlayListPage({children,albumImage,albumName}) {
   
   var [token] = useContext(TokenContext);
   var [content, setContent] = useState({});
 
   useEffect(function() {
     axios.get("https://api.spotify.com/v1/me/playlists", {
       headers: {
         "Authorization": "Bearer " + token.access_token
       }
     })
     .then(response => setContent(response.data));
   }, [token, setContent]);
   

   var primaryAlbumImage = content.items && content.items[0].images[0].url;

   if (albumImage) {
     primaryAlbumImage = albumImage;
   }
   var primaryAlbumName = content.items && content.items[0].name;

   if (albumName) {
     primaryAlbumName = albumName;
   }

 return (
    <>
    <img className="PlayListBGImage" src="/sound-wave.svg" alt="background"/>
    <MainContent title="Playlists" white>
    <div className="PlayListPage">
       
       <div className="PlayListPageImageTextContainer">
          <div className="PlayListPagecarousel">
       <img className="PlayListPageImage1" src={content.items && content.items[1].images[0].url } alt="carasell"/>
       <img className="PlayListPageImage" src={primaryAlbumImage} alt="carasell"/>
       <img className="PlayListPageImage2" src={content.items && content.items[2].images[0].url} alt="carasell"/>
          </div>
       <h3 className="PlayListPageTitle">{primaryAlbumName}</h3>
       </div>
        {children}
        <div className="RoundButtonIconContainer">
        <div className="PlayListPageListenAll"><p className="PlayListPageListenAllText">Listen All</p></div>
    </div>
    </div>
    </MainContent>
    </>
  );
}

export default PlayListPage;