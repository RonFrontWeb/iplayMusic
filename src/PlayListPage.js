import './PlayListPage.css';

function PlayListPage({children}) {
 return (
    <div className="PlayListPage">
       
       <div className="PlayListPageImageTextContainer">
          <div className="PlayListPagecarousel">
       <img className="PlayListPageImage1" src="https://picsum.photos/250/250?random" alt="carasell"/>
       <img className="PlayListPageImage" src="https://picsum.photos/250/250?random" alt="carasell"/>
       <img className="PlayListPageImage2" src="https://picsum.photos/250/250?random" alt="carasell"/>
          </div>
       <h3 className="PlayListPageTitle">Top 50 <br/>Rock Ballads</h3>
       </div>
        {children}
        <div className="RoundButtonIconContainer">
        <div className="PlayListPageListenAll"><p className="PlayListPageListenAllText">Listen All</p></div>
    </div>
    </div>
  );
}

export default PlayListPage;