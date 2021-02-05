import './CategoryButton.css';
import axios from "axios";
import { useContext,useState } from "react";
import TokenContext from "./TokenContext";


function CategoryButton({title,id}) {
   var [token] = useContext(TokenContext);
   var [content, setContent] = useState({});
   var [loaded, setLoaded] = useState(false);
  


 return (
    <details className="CategoryButton" onClick ={function (evt) {
      if (loaded === false) {

        setLoaded(true);

        axios.get(`https://api.spotify.com/v1/browse/categories/${id}/playlists`, {
          headers: {
            "Authorization": "Bearer " + token.access_token
          }
        })
        .then(response => setContent(response.data));  
      }
    }} >
       <summary className="CategoryButtonContainer">
          <h3 className="CategoryButtonTilte">{title}</h3>
         <img className="CategoryButtonMore" src="/more.svg" alt="show more"/>
       </summary>

       <div className="CategoryButtonSubmenuContainer">   
          {content.playlists?.items.map(function (item) {
         return  <div className="CategoryButtonSubmenu" key={item.id}>
         <h4 className="CategoryButtonSubmenuTitle">{item.name}</h4>
         <button className="CategoryButtonArrow"><img src="/arrow-forward.svg" alt="contrast"/></button>
      </div>

    })}

       </div>
    </details>
   
  );
}

export default CategoryButton;