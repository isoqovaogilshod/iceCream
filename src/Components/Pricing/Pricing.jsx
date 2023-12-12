import "./Pricing.css";
import car from "../../../public/images/pictureSvg/car.svg";
import packaging from "../../../public/images/pictureSvg/packaging.svg";
import money from "../../../public/images/pictureSvg/money.svg";
import fastDelivery from "../../../public/images/pictureSvg/fastDelivery.svg";
const Pricing = () => {
  return (
    <div id="pricing" className="container">
      <div className="cards">
        <div className="card">
          <img src={car} alt="car" />
          <h3>Free Shipping</h3>
          <p>Last Chance! Free shipping on all orders ends today.</p>
        </div>
        <div className="card">
          <img src={packaging} alt="packaging" />
          <h3>Quick Packaging</h3>
          <p>Last Chance! Free shipping on all orders ends today.</p>
        </div>
        <div className="card">
          <img src={money} alt="money" />
          <h3>100% Money Back</h3>
          <p>Last Chance! Free shipping on all orders ends today.</p>
        </div>
        <div className="card">
          <img src={fastDelivery} alt="fastDelivery" />
          <h3>Fast Delivery</h3>
          <p>Last Chance! Free shipping on all orders ends today.</p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
