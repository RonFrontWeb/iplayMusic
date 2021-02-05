import { Link } from '@reach/router';
import './PlayListElement.css';

function PlayListElement({title,artist,time,img,small,id,page}) {

   // var thumbImg = "";
   // if (small === true) {
   //    thumbImg = "PlayListElementImageSmall"
   // }
 return (
    
         <Link to={`/${page}/${id}`} className="PlayListElement">
            <img className={`PlayListElementImage ${small}`} src={img} alt=""/>
            <div className="PlayListElementTitleandTextContainer" >
               <h3 className="PlayListElementTitle">{title}</h3>
               <p className="PlayListElementText">{artist}</p>
            </div>
             <p className="PlayListElementOuterText">{time}</p>
         </Link>

    
  );
}

export default PlayListElement;