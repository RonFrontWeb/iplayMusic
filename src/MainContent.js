import './MainContent.css';

function MainContent({children}) {
 return (
    <div className="MainContent">
        <h2 className="MainContentTitle"><span className="MainContentGradient">Featured</span></h2>
        <div className="MainContentGridContainer">
        {children}
        </div>
    </div>
  );
}

export default MainContent;