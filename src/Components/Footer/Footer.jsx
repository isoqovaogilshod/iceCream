import "./Footer.css";
import logo from "../../../public/images/pictureSvg/logo.svg";
import facebook from "../../../public/images/pictureSvg/facebook.svg";
import twitter from "../../../public/images/pictureSvg/twitter.svg";
import instagram from "../../../public/images/pictureSvg/instagram.svg";
import linkedin from "../../../public/images/pictureSvg/linkedin.svg";
import Pand from "../../../public/images/pictureSvg/Pand.svg";
import MasterCard from "../../../public/images/pictureSvg/MasterCard.svg";
import Visa from "../../../public/images/pictureSvg/visa.svg";
const Footer = () => {
  return (
    <div id="contactUs">
      <div className="footer container">
        <div className="logosPart">
          <img src={logo} alt="logo" />
          <p>
            Some food has looked so awful that it's looked like something that
            the dog's brought home.
          </p>
          <h5>Fllow Us</h5>
          <div className="logosPartImgs">
            <img src={facebook} alt="facebook" />
            <img src={twitter} alt="twitter" />
            <img src={instagram} alt="instagram" />
            <img src={linkedin} alt="linkedin" />
          </div>
        </div>
        <div className="footerLinks">
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
                <a href="#">Blog</a>
            </li>
            <li>
              <a href="#testimonals">Testimonials</a>
            </li>
            <li>
              <a href="#contactUs">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="linksPart">
          <ul>
            <li>
              <a href="#">Delivery Information</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms & Condition</a>
            </li>
            <li>
              <a href="#">Search Terms</a>
            </li>
            <li>
              <a href="#">Order & Return</a>
            </li>
          </ul>
        </div>
        <div className="subscribe">
          <h3>Newsletter</h3>
          <div className="subscribePart">
            <input type="text" placeholder="Your Email" />
            <button className="btn">Subscribe</button>
          </div>
            <div className="foorterBrands">
              <img src={Pand} className="pand" alt="Pand" />
              <img src={MasterCard} className="masterCard" alt="MasterCard" />
              <img src={Visa} className="visa" alt="Visa" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
