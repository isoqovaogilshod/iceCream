import "./SugarPart.css";
import sugar from '../../../public/images/pngImages/sugarImg.png'
const SugarPart = () => {
  return (
    <div className="sugarPart">
      <div className="sugarBg container">
        <div className="sugarPartText ">
          <h2>Brown Sugar Oatmea</h2>
          <p>
            Together with McDonald’s, Burger King has grown to become synonymous
            with burgers in the US.Together with McDonald’s, Burger King has
            grown to become synonymous.
          </p>
          <button className="btn">See Details</button>
        </div>
        <div className="sugarPartImg">
          <img src={sugar} alt="sugar" />
        </div>
      </div>
    </div>
  );
};

export default SugarPart;
