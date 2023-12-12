import brownBread from "/images/pngImages/brownBread.png";
import cayenna from "/images/pngImages/cayenne.png";
import sweetCorn from "/images/pngImages/sweetCorn.png";
import adele from "../../../public/images/pictureSvg/adele.svg";
import arrow1 from "../../../public/images/pictureSvg/right-arrow 1.png";
import arrow2 from "../../../public/images/pictureSvg/right-arrow 2.png";
import man from "../../../public/images/pictureSvg/man.png";
import littleAdel from "../../../public/images/pictureSvg/little adele.png";
import chocolate from "../../../public/images/pngImages/chocolate.png";
import Group1 from "../../../public/images/pictureSvg/Group1.png";
import Group2 from "../../../public/images/pictureSvg/Group2.png";
import "./Prodact.css";
const Product = () => {
  return (
    <div id="product" className="container">
      <h2>Our Product</h2>
      <div className="links">
        <ul>
          <li>
            <a href="#">ICE CREAM</a>
          </li>
          <li>
            <a href="#">CAYENNE CHOCOLATE</a>
          </li>
          <li>
            <a href="#">CAKE BATTER</a>
          </li>
          <li>
            <a href="#">CANDY CANE</a>
          </li>
          <li>
            <a href="#">PLATTERS</a>
          </li>
          <li>
            <a href="#">DESSERT</a>
          </li>
        </ul>
      </div>
      <div className="about">
        <div className="part">
          <div className="img">
            <img src={brownBread} alt="brownBread" />
          </div>
          <div className="text">
            <h3>Brown bread</h3>
            <p>
              Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au
              Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a
              pioneer in the healthy fast food scene.
            </p>
            <div className="cost">
              <h4>$19.55</h4>
              <span>$22.55</span>
            </div>
            <button className="btn">Buy Now</button>
          </div>
        </div>
        <div className="part">
          <div className="img">
            <img src={cayenna} alt="cayenna" />
          </div>
          <div className="text">
            <h3>Cayenne chocolate</h3>
            <p>
              Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au
              Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a
              pioneer in the healthy fast food scene.
            </p>
            <div className="cost">
              <h4>$19.55</h4>
              <span>$22.55</span>
            </div>
            <button className="btn">Buy Now</button>
          </div>
        </div>
        <div className="part">
          <div className="img">
            <img src={sweetCorn} alt="sweetCorn" />
          </div>
          <div className="text">
            <h3>Sweet corn</h3>
            <p>
              Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au
              Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a
              pioneer in the healthy fast food scene.
            </p>
            <div className="cost">
              <h4>$19.55</h4>
              <span>$22.55</span>
            </div>
            <button className="btn">Buy Now</button>
          </div>
        </div>
      </div>
      <div id="testimonals">
        <div className="left">
          <div className="user">
            <div>
              <img src={adele} alt="adele" />
            </div>
            <div>
              <h3>Adele A. McNeill</h3>
              <span>AMIRICAN</span>
            </div>
          </div>
          <div className="thanks">
            <p>
              <img src={Group1} alt="Group1" />
              <span className="white"> oooo</span>
              <span className="thanksText">
                Thanks a lot for the prompt service. Really appreciate.
                Excellence taste in Every Bite.Add a joy of best Taste. Foodie
                Moments.
              </span>
              <span className="white">ooo</span>
              <img src={Group2} alt="Group2" />
            </p>
          </div>
          <div className="usersPart">
            <img src={arrow2} alt="arrow2" />
            <img src={man} className="little" alt="man" />
            <img src={adele} className="adele" alt="adele" />
            <img src={littleAdel} className="little" alt="littleAdel" />
            <img src={arrow1} alt="arrow1" />
          </div>
        </div>
        <div className="right">
          <img src={chocolate} alt="chocolate" />
        </div>
      </div>
    </div>
  );
};

export default Product;
