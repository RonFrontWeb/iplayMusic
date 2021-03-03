
import CategoryButton from "../CategoryButton";
import MainContent from "../MainContent";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import TokenContext from "../TokenContext";
import SecondaryMenubar from "../SecondaryMenubar";
import PrimaryMenubar from "../PrimaryMenubar";



function Category() {
  var [token] = useContext(TokenContext);
  var [content, setContent] = useState({});

  useEffect(function() {
    axios.get("https://api.spotify.com/v1/browse/categories?locale=en_US&contry=DK  ", {
      headers: {
        "Authorization": "Bearer " + token.access_token
      }
    })
    .then(response => setContent(response.data));
  }, [token, setContent]);


 return (
   <>
   <SecondaryMenubar background title="categories"/>
  <MainContent title="Categories">

    {content.categories?.items.map(function (item) {
         return  <CategoryButton key={item.id} title={item.name} id={item.id}/>
    })}

    {/* <CategoryButton title={content.categories.items[0].name} text={content.categories.items[0].name}/> */}
    
  </MainContent> 
  <PrimaryMenubar/>
  </>
  );
}

export default Category;