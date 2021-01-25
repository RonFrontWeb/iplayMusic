import './CategoryButton.css';

function CategoryButton() {
 return (
    <div className="CategoryButton">
       <div className="CategoryButtonContainer">
       <h3 className="CategoryButtonTilte">Alternative</h3>
       <button className="CategoryButtonMore"><img src="/more.svg" alt="show more"/></button>
       </div>
       <div>
          <div className="CategoryButtonSubmenu" >
             <h4 className="CategoryButtonSubmenuTitle" >Acoustic Blues</h4>
             <button className="CategoryButtonArrow"><img src="/arrow-forward.svg" alt="contrast"/></button>
          </div>
       </div>
    </div>
   
  );
}

export default CategoryButton;