import './PlayerElement.css';

function PlayerElement() {
 return (
    <div className="PlayerElement">
       <input className="PlayerElementRange" type="range" min="20" max="100" />
       <div className="PlayerElementTimeContainer">
          <p className="PlayerElementTime">0. 00</p>
          <p className="PlayerElementTime">3. 45</p>
       </div>
       <div className="PlayerElementLinks">
         <a href="http://localhost:3000"><img src="/backward.svg" alt="backward"/></a>
         <a href="http://localhost:3000"><img src="/rewind.svg" alt="rewind"/></a>
         <a href="http://localhost:3000"><img src="/play.svg" alt="Play"/></a>
         <a href="http://localhost:3000"><img src="/fastforward.svg" alt="fastforward"/></a>
         <a href="http://localhost:3000"><img src="/forward.svg" alt="forward"/></a>
       </div>
    </div>
  );
}

export default PlayerElement;