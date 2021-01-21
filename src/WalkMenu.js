import './WalkMenu.css';

function WalkMenu() {
 return (
    <div className="WalkMenu">
       <div className="walkMenuIcons">
        <div className="walkMenuIcon"><img className="walkMenuIconRadio" src="/radio.svg" alt="search"/></div>
        <div className="walkMenuIcon"><img className="walkMenuIconHeart" src="/heart.svg" alt="arrow back"/></div>
        <div className="walkMenuIcon"><img className="walkMenuIconNote" src="/note.svg" alt="search"/></div>
      </div>
          <h1 className="WalkMenuSkip">skip</h1>
    </div>
  );
}

export default WalkMenu;