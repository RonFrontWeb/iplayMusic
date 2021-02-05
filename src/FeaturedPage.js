import './FeaturedPage.css';

function FeaturedPage(props) {
 return (
    <div className="FeaturedPage">
       <div className="FeaturedImageContainer">
       <img className="FeaturedImage" src={props.image} alt="Logo"/>
       <div className="FeaturedPageOverlay"></div>
       <h1 className="FeaturedImageTilte">{props.name}</h1>
       <p className="FeaturedImageText">{props.description}</p>
       </div>
    </div>
  );
}

export default FeaturedPage;