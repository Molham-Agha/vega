import { Helmet } from "react-helmet-async";
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
              <img decoding="async" src="https://res.cloudinary.com/dag9fwtvk/image/upload/v1693359342/img/landing_c641af.jpg" alt="" />
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
              <img decoding="async" src="https://res.cloudinary.com/dag9fwtvk/image/upload/v1693359030/photo2/973/973_1_m0bdzi.png" alt="" />
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img decoding="async" src="https://res.cloudinary.com/dag9fwtvk/image/upload/v1693359030/photo2/978/978_ry1nvi.png" alt="" />
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img decoding="async" src="https://res.cloudinary.com/dag9fwtvk/image/upload/v1693359043/photo2/623/623_1_oiplm7.png" alt="" />
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img decoding="async" src="https://res.cloudinary.com/dag9fwtvk/image/upload/v1693359307/phots%20abo%20maher/214/214_1_vcdofd.png" alt="" />
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img decoding="async" src="https://res.cloudinary.com/dag9fwtvk/image/upload/v1693359303/phots%20abo%20maher/255/255_yfvmu1.png" alt="" />
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img decoding="async" src="https://res.cloudinary.com/dag9fwtvk/image/upload/v1693359294/phots%20abo%20maher/489/489_1_jd93lb.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="features" id="features">
        <h3 className="main-title">Products</h3>
        <div className="container">
          <div className="box quality">
            <div className="img-holder">
              <img decoding="async" src="https://res.cloudinary.com/dag9fwtvk/image/upload/v1693359219/photos%20haraka/pebblely_37_nghdt2.jpg" alt="" />
            </div>
            <h2>For Man</h2>
            <p>
              Enjoy the strength and the amazing and attractive scent for the whole day
            </p>
            <Link to="/man">View products</Link>
          </div>
          <div className="box time">
            <div className="img-holder">
              <img decoding="async" src="https://res.cloudinary.com/dag9fwtvk/image/upload/v1693359228/photos%20haraka/pebblely_8_xjtp6r.jpg" alt="" />
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
