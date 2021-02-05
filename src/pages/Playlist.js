import PlayListPage from "../PlayListPage";
import PlayListElement from "../PlayListElement";
import SecondaryMenubar from "../SecondaryMenubar";
import PrimaryMenubar from "../PrimaryMenubar";
import { useContext, useEffect, useState } from "react";
import TokenContext from "../TokenContext";
import axios from "axios";



function Playlist(props) {


    var [token] = useContext(TokenContext);
    var [content, setContent] = useState({});
    var trackId = "5c5Nd9eIIzXe148pvCXco1";
    var page = "playlists"
    var isTrack = "/tracks"
    if (props.id) {
      trackId = props.id;
      page = "albums"
      isTrack = "";
    }

    useEffect(function() {
      axios.get(`https://api.spotify.com/v1/${page}/${trackId}${isTrack}`, {
        headers: {
          "Authorization": "Bearer " + token.access_token
        }
      })
      .then(response => setContent(response.data));
    }, [token, setContent, trackId, page, isTrack]);
   

    var playListLoop = [];
    if (props.id) {
      playListLoop = content.tracks?.items?.map(function(item) {
        return <PlayListElement 
          small="PlayListElementImageSmall" 
          page="player" 
          key={item.id} 
          id={item.id} 
          img={"/playicon.svg"} 
          title={item.name} 
          artist={item.artists[0].name} 
          time={timeConverter(item.duration_ms)}>
      </PlayListElement>

      })
    } else {
      playListLoop = content.items?.map(function(item) {
        return <PlayListElement 
          small="PlayListElementImageSmall" 
          page="player" 
          key={item.track.id} 
          id={item.track.id} 
          img={"/playicon.svg"} 
          title={item.track.name} 
          artist={item.track.artists[0].name} 
          time={timeConverter(item.track.duration_ms)}>
        </PlayListElement>
      })
    }


 return (
   <>
   <SecondaryMenubar title="Playlists"/>
    <PlayListPage albumName={ content.name} albumImage={content.images && content.images[1].url}> 
        {playListLoop}
    </PlayListPage>
  <PrimaryMenubar/>
  </>
  );
}



function timeConverter(timeMs) {
  var secConverter = timeMs/1000; 
  var restSec = secConverter/60
  var minConverter = Math.floor(restSec); 
  var result = restSec - minConverter 
  var MinToSec = Math.round(result*60)

  if (MinToSec < 10) {
    var secResult = "0" + MinToSec;
  }else {
    secResult = MinToSec;
  }
  
  var finalResult = minConverter + " : " + secResult;
  return finalResult
}



export default Playlist;