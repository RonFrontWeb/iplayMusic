import './MainContent.css';

function MainContent({children,title}) {
 return (
    <div className="MainContent">
        <h2 className="MainContentTitle"><span className="MainContentGradient">{title}</span></h2>
        <div className="MainContentGridContainer">
        {children}
        </div>
    </div>
  );
}

export default MainContent;