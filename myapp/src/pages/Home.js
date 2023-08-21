import { Helmet } from 'react-helmet-async';
import Header from "../commp/Header";
import Footer from "../commp/Footer";
import img from "../images/img/landing.jpg";
import a1 from "../images/des1/106.png"
import a2 from "../images/des1/134.png"
import a3 from "../images/des1/152.png"
import a4 from "../images/des2/152.png"
import a5 from "../images/des2/213.png"
import a6 from "../images/des2/321.png"
import a7 from "../images/des1/876.png"
import a8 from "../images/des1/973.png"

import { Link } from "react-router-dom";


const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Header />
      <div className="landing">
        <div className="container">
          <div className="landing-content">
            <div className="image">
              <img
                decoding="async"
                src= {img}
                alt=""
              />
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
              <img decoding="async" src={a2} alt="" />
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img decoding="async" src={a3} alt="" />
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img decoding="async" src={a5} alt="" />
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
        </div>
      </div>
      <div className="features" id="features">
        <h3 className="main-title">Products</h3>
        <div className="container">
          <div className="box quality">
            <div className="img-holder"><img decoding="async" src={a7} alt="" /></div>
            <h2>For Man</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima</p>
            <Link to="/Forman">Viue More</Link>
          </div>
          <div className="box time">
            <div className="img-holder"><img decoding="async" src={a8} alt="" /></div>
            <h2>For Woman</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima</p>
            <Link to="/Forwoman">Viue More</Link>
          </div>
        </div>
      </div>
      <div className="stats" id="stats">
        <h2>Our Stats</h2>
        <div className="container">
          <div className="box">
            <i className="far fa-user fa-2x fa-fw" />
            <span className="number">414</span>
            <span className="text">Customers</span>
          </div>
          <div className="box">
            <i className="far fa-money-bill-alt fa-2x fa-fw" />
            <span className="number">359</span>
            <span className="text">The Sales</span>
          </div>
          <div className="box">
            <i className="fa-solid fa-plus fa-2xl"></i>
            <span className="number">+80</span>
            <span className="text">Types</span>
          </div>
          <div className="box">
            <i className="fas fa-globe-asia fa-2x fa-fw" />
            <span className="number">390</span>
            <span className='text'>Interactions</span>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default Home;
