import { Helmet } from "react-helmet-async";
import Header from "../commp/Header";
import Footer from "../commp/Footer";
import pm1 from "../images/img/pm1.jpeg";
import p22 from "../images/img/p22.jpg";
import turky from "../images/img/turky.jpeg";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Page</title>
      </Helmet>
      <Header />
      <div className="about">
        <div className="about-content">
          <div className="imagee">
            <img decoding="async" src={pm1} alt="" />
          </div>
          <div className="content">
            <p>  Lorem ipsum ldolor sit amet consectetur adipisicing elit. Nihil
                nemo neque voluptate tempora velit cum non, fuga vitae
                architecto delectus sed maxime rerum impedit aliquam obcaecati,
                aut excepturi iusto laudantium</p>
          </div>
        </div>
        <hr />
      </div>
      <div className="seal">
         <img className="seal-imge" decoding="async" src={turky} alt="" />
      </div>
      <div class="opp">
      <div class="container-stats">
        <div class="box">
          <i class="fas fa-mug-hot"></i>
          <p> shipping term 7 days</p>
        </div>
        <div class="box">
          <i class="far fa-folder"></i>
          <p>Fast shipping</p>
        </div>
        <div class="box">
          <i class="far fa-envelope"></i>
          <p>Fast shipping over 200$</p>
        </div>
        <div class="box">
          <i class="fas fa-trophy"></i>
          <p>Awards Received</p>
        </div>
      </div>
    </div>
    <div className="tyt">
       <h5>Privacy of the company and customers</h5>
      <p>LoremLorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minimaLorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minimaLorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minimaLorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minimaLorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima</p>
    </div>
      <Footer />
    </>
  );
};

export default About;
