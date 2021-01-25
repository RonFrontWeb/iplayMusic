import './FeaturedPage.css';

function FeaturedPage() {
 return (
    <div className="FeaturedPage">
       <div className="FeaturedImageContainer">
       <a href="#"><img className="FeaturedImage" src="https://picsum.photos/450/650?random" alt="Logo"/></a>
       <div className="FeaturedPageOverlay"></div>
       <h1 className="FeaturedImageTilte">The Greatest <br/> Showman</h1>
       <p className="FeaturedImageText">Soundtrack</p>
       </div>
    </div>
  );
}

export default FeaturedPage;