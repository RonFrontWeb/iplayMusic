import PlayerElement from './PlayerElement';
import './PlayerPage.css';
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import TokenContext from "./TokenContext";
import SecondaryMenubar from './SecondaryMenubar';

function PlayerPage(props) {

   var [token] = useContext(TokenContext);
   var [content, setContent] = useState({});
 
   useEffect(function() {
     axios.get(`https://api.spotify.com/v1/tracks/${props.id}`, {
       headers: {
         "Authorization": "Bearer " + token.access_token
       }
     })
     .then(response => setContent(response.data));
   }, [token, setContent,props.id]);


 return (
    <>
    <SecondaryMenubar/>
    <div className="PlayerPage">
       <div className="PlayerPageElement">
         <img className="PlayerPageImg" src={content.album?.images[0].url} alt="player"/>
          <h3 className="PlayerPageNumber">{content.name}</h3>
          <h6 className="PlayerPageArtist">{content.album?.name}</h6>
       </div>
       <PlayerElement/>
    </div>
    </>
  );
}

export default PlayerPage;
