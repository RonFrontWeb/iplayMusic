import './PlayListElement.css';

function PlayListElement() {
 return (
    <div className="PlayListElement">
         <div className="PlayListElement">
            <img className="PlayListElementImage" src="./elli.svg" alt=""/>
            <div className="PlayListElementTitleandTextContainer" >
               <h3 className="PlayListElementTitle">Old Town Road</h3>
               <p className="PlayListElementText">Billy Ray Cyrus</p>
            </div>
         </div>
       <p className="PlayListElementOuterText">3 : 58</p>
    </div>
  );
}

export default PlayListElement;