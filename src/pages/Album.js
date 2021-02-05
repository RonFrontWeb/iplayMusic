import AlbumPage from "../AlbumPage";
import MainContent from "../MainContent";
import PlayListElement from "../PlayListElement";
import PrimaryMenubar from "../PrimaryMenubar";
import SecondaryMenubar from "../SecondaryMenubar";
import { useContext, useEffect, useState } from "react";
import TokenContext from "../TokenContext";
import axios from "axios";


function Album() {
  var [token] = useContext(TokenContext);
    var [content, setContent] = useState({});
  
    useEffect(function() {
      axios.get("https://api.spotify.com/v1/browse/new-releases", {
        headers: {
          "Authorization": "Bearer " + token.access_token
        }
      })
      .then(response => setContent(response.data));
    }, [token, setContent]);
    console.log(content)
 return (
   
   <>
    <SecondaryMenubar background/>
    <MainContent title="All Albums">
      <AlbumPage>
          
        {content.albums?.items.map(function(item) {
          return <PlayListElement 
          small 
          key={item.id} 
          id={item.id} 
          page="playlists" 
          img={item.images[2].url} 
          title={item.name} 
          artist={item.artists[0].name} 
          time={ `${item.total_tracks} song${item.total_tracks > 1? "s": ""}`} >

          </PlayListElement>
        })}
    
      
     </AlbumPage>
    </MainContent>
     <PrimaryMenubar/>
    </>
  );
}

export default Album;