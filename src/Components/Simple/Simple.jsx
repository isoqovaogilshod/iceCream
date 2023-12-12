import "./Simple.css";
import MaskGroup from "../../../public/images/pngImages/MaskGroup.png";
import hand from "../../../public/images/pictureSvg/hand.svg";
import bucket from "../../../public/images/pictureSvg/bucket.svg";
import write from "../../../public/images/pictureSvg/write.svg";
import google from "../../../public/images/pngImages/google.png";
import apple from "../../../public/images/pngImages/apple.png";
function Simple() {
  return (
    <div className="simpleBg">
      <div className="simple container">
        <div className="simple-left">
          <img src={MaskGroup} alt="MaskGroup" />
        </div>
        <div className="simple-right">
          <h2>Simple Way To Order Your Food</h2>
          <p>
            Some food has looked so awful that it's looked like something that
            the dog's brought home, yet after one mouthful I've been left eating
            my thoughts.
          </p>
          <div className="threePart">
            <div className="part">
              <div className="img">
                <img src={hand} alt="hand" />
              </div>
              <p>Select Your Food</p>
            </div>
            <div className="part">
              <div className="img">
                <img src={bucket} alt="bucket" />
              </div>
              <p>Add To Cart</p>
            </div>
            <div className="part">
              <div className="img">
                <img src={write} alt="write" />
              </div>
              <p>Order Your Food</p>
            </div>
          </div>
          <div className="brands">
            <img src={google} className="google" alt="google" />
            <img src={apple} className="apple" alt="apple" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Simple;
