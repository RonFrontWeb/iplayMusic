import FeaturedPage from "../FeaturedPage";
import MainContent from "../MainContent";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import TokenContext from "../TokenContext";
import PrimaryMenubar from "../PrimaryMenubar";
import SecondaryMenubar from "../SecondaryMenubar";




function Featured() {
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

 return (
   <>
  <MainContent title="Featured">
      
      {content.playlists?.items.map(function (item) {
        return     <FeaturedPage key={item.id} name={item.name} description={item.description} image={item.images[0].url}/>
      })}
  </MainContent>  
  <SecondaryMenubar title="Featured" background/>
  <PrimaryMenubar/>
  </>
  );
}

export default Featured;