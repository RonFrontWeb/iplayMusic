import './MainContent.css';

function MainContent({children,title,white}) {
  var classstring ="";
  if (white === true ) {
    classstring = "white";
  }
 return (
    <div className="MainContent">
        <h2 className="MainContentTitle"><span className={`MainContentGradient ${classstring}`}>{title}</span></h2>
        <div className="MainContentGridContainer">
        {children}
        </div>
    </div>
  );
}

export default MainContent;