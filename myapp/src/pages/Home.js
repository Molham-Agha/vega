import { Helmet } from "react-helmet-async";

import img from "../images/img/landing.jpg";
import a1 from "../images/front/23/23.png";
import a2 from "../images/front/106/106.png";
import a3 from "../images/front/134/134.png";
import a4 from "../images/front/532/532.png";
import a5 from "../images/front/540/540.png";
import a6 from "../images/front/378/378.png";
import W1 from "../images/photos haraka2/pebblely (8).jpg"
import W2 from "../images/photos haraka2/pebblely (37).jpg"
import { Link } from "react-router-dom";
import Slider from "../commp/inhadslider/Slider";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Slider />
      <div className="landing">
        <div className="container">
          <div className="landing-content">
            <div className="image">
              <img decoding="async" src={img} alt="" />
            </div>
            <div className="text">
              <p>
                
                Our passionate journey into the magical world of travel, which is one of the ways we express our star in our daily lives and even reflect our personality through our choices, continuing since 1999
              </p>
              <hr />
              <p>
                
                Our company is a pioneer in the field of manufacturing homogeneous perfumes taken from the magic of nature, which makes it distinctive, innovative scent, smooth and beautiful texture.<span>Perfume is the signature of the body</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="gallery" id="gallery">
        <h2 className="main-title">products overview</h2>
        <div className="container">
          <div className="box">
            <div className="image">
              <img decoding="async" src={a1} alt="" />
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img decoding="async" src={a3} alt="" />
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img decoding="async" src={a2} alt="" />
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img decoding="async" src={a6} alt="" />
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img decoding="async" src={a4} alt="" />
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img decoding="async" src={a5} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="features" id="features">
        <h3 className="main-title">Products</h3>
        <div className="container">
          <div className="box quality">
            <div className="img-holder">
              <img decoding="async" src={W2} alt="" />
            </div>
            <h2>For Man</h2>
            <p>
              Enjoy the strength and the amazing and attractive scent for the whole day
            </p>
            <Link to="/man">View products</Link>
          </div>
          <div className="box time">
            <div className="img-holder">
              <img decoding="async" src={W1} alt="" />
            </div>
            <h2>For Woman</h2>
            <p>
              Soft and warm on the body. Feel the beauty of nature. It lasts all day
            </p>
            <Link to="/woman">View products</Link>
          </div>
        </div>
      </div>
      <div className="opp">
        <div className="container-stats">
          <div className="box">
            <i className="fa-solid fa-truck"></i>
            <p> shipping term one day</p>
          </div>
          <div className="box">
            <i className="fa-solid fa-route"></i>
            <p>Fast shipping</p>
          </div>
          <div className="box">
            <i className="fa-solid fa-gift"></i>
            <p>Free shipping over 200$</p>
          </div>
          <div className="box">
            <i className="fa-brands fa-cc-visa"></i>
            <p>Safe shopping</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
