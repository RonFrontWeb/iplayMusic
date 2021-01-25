import './CategoryButton.css';

function CategoryButton({title,text}) {
 return (
    <details className="CategoryButton">
       <summary className="CategoryButtonContainer">
          <h3 className="CategoryButtonTilte">{title}</h3>
         <img className="CategoryButtonMore" src="/more.svg" alt="show more"/>
       </summary>

       <div className="CategoryButtonSubmenuContainer">
          <div className="CategoryButtonSubmenu">
             <h4 className="CategoryButtonSubmenuTitle">{text}</h4>
             <button className="CategoryButtonArrow"><img src="/arrow-forward.svg" alt="contrast"/></button>
          </div>
          <div className="CategoryButtonSubmenu">
             <h4 className="CategoryButtonSubmenuTitle">Acoustic Blues</h4>
             <button className="CategoryButtonArrow"><img src="/arrow-forward.svg" alt="contrast"/></button>
          </div>
          <div className="CategoryButtonSubmenu">
             <h4 className="CategoryButtonSubmenuTitle">Acoustic Blues</h4>
             <button className="CategoryButtonArrow"><img src="/arrow-forward.svg" alt="contrast"/></button>
          </div>
       </div>
    </details>
   
  );
}

export default CategoryButton;