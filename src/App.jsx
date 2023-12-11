import "./App.css";
// import "../public/images/images-removebg-preview 1.png";
function App() {
  return (
    <div className="wrapper">
      <div className="header">
        <div className="container">
          <div className="navbar">
            <div className="nav-logo">
              <img src="../public/images/pictureSvg/logo.svg" alt="" />
            </div>
            <div className="linksBtn">
              <div className="nav-links">
                <ul>
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#product">Product</a>
                  </li>
                  <li>
                    <a href="#pricing">Pricing</a>
                  </li>
                  <li>
                    <a href="#testimonials">Testimonials</a>
                  </li>
                  <li>
                    <a href="#contactUs">Contact Us</a>
                  </li>
                </ul>
              </div>
              <div>
                <button className="btn">Buy Now</button>
              </div>
            </div>
          </div>
          <div id="home">
            <div className="hero-text">
              <h5>Sweet fun, full of milk.</h5>
              <h1>
                Feel inside cold with our delicious <span>ice-cream.</span>
              </h1>
              <p>
                Some food has looked so awful that it's looked like something
                that the dog's brought home, yet after one mouthful I've been
                left eating my thoughts, my words.
              </p>
              <button className="btn">Buy Now</button>
            </div>
            <div className="hero-img">
              <img src="../public/images/iceCream.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div id="pricing " className="container">
        <div className="cards">
          <div className="card">
            <img src="../public/images/pictureSvg/car.svg" alt="" />
            <h3>Free Shipping</h3>
            <p>Last Chance! Free shipping on all orders ends today.</p>
          </div>
          <div className="card">
            <img src="../public/images/pictureSvg/packaging.svg" alt="" />
            <h3>Quick Packaging</h3>
            <p>Last Chance! Free shipping on all orders ends today.</p>
          </div>
          <div className="card">
            <img src="../public/images/pictureSvg/money.svg" alt="" />
            <h3>100% Money Back</h3>
            <p>Last Chance! Free shipping on all orders ends today.</p>
          </div>
          <div className="card">
            <img src="../public/images/pictureSvg/fast-delivery.svg" alt="" />
            <h3>Fast Delivery</h3>
            <p>Last Chance! Free shipping on all orders ends today.</p>
          </div>
        </div>
      </div>
      <div className="sugarPart">
        <div className="sugarBg container">
          <div className="sugarPartText ">
            <h2>Brown Sugar Oatmea</h2>
            <p>
              Together with McDonald’s, Burger King has grown to become
              synonymous with burgers in the US.Together with McDonald’s, Burger
              King has grown to become synonymous.
            </p>
            <button className="btn">See Details</button>
          </div>
          <div className="sugarPartImg">
            <img src="../public/images/sugarImg.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
