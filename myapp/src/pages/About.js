import { Helmet } from "react-helmet-async";
import Header from "../commp/Header";
import Footer from "../commp/Footer";
import pm1 from "../images/img/pm1.jpeg";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Page</title>
      </Helmet>
      <Header />
      <div className="about">
        <h1 className="title">About au</h1>
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
      </div>

      <Footer />
    </>
  );
};

export default About;
