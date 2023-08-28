import { Helmet } from "react-helmet-async";

import img from "../images/img/landing.jpg";
import a1 from "../images/front/23/23.png";
import a2 from "../images/front/106/106.png";
import a3 from "../images/front/134/134.png";
import a4 from "../images/front/532/532.png";
import a5 from "../images/front/540/540.png";
import a6 from "../images/front/378/378.png";
import a7 from "../images/front/543/543.png";
import a8 from "../images/front/214/214  1.png";

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
                {" "}
                Lorem ipsum ldolor sit amet consectetur adipisicing elit. Nihil
                nemo neque voluptate tempora velit cum non, fuga vitae
                architecto delectus sed maxime rerum impedit aliquam obcaecati,
                aut excepturi iusto laudantium!{" "}
              </p>
              <hr />
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
                sapiente. Velit iure exercitationem dolores nesciunt dolore. Eum
                officiis dolorum hic voluptate quaerat minima, similique
                inventore esse, alias, sed quo officia?{" "}
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
              <img decoding="async" src={a7} alt="" />
            </div>
            <h2>For Man</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              harum hic veniam eligendi minima
            </p>
            <Link to="/man">Show more</Link>
          </div>
          <div className="box time">
            <div className="img-holder">
              <img decoding="async" src={a8} alt="" />
            </div>
            <h2>For Woman</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              harum hic veniam eligendi minima
            </p>
            <Link to="/woman">Show more</Link>
          </div>
        </div>
      </div>
      <div className="opp">
        <div className="container-stats">
          <div className="box">
            <i className="fa-solid fa-truck"></i>
            <p> shipping term 7 days</p>
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
