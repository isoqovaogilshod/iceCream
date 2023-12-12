import "./Header.css";
import logo from '../../../public/images/pictureSvg/logo.svg'
import ice_cream from '../../../public/images/pngImages/ice-Cream-2.jpg'
const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="navbar">
          <div className="nav-logo">
            <img src={logo} alt="logo" />
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
                  <a href="#testimonals">Testimonials</a>
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
              Some food has looked so awful that its looked like something that
              the dogs brought home, yet after one mouthful Ive been left
              eating my thoughts, my words.
            </p>
            <button className="btn">Buy Now</button>
          </div>
          <div className="hero-img">
            <img src={ice_cream} alt="ice_cream" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
