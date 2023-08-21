import { Helmet } from "react-helmet-async";
import Header from "../commp/Header";
import Footer from "../commp/Footer";
import pm1 from "../images/img/pm1.jpeg";
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
            <p>Make sure our seal is on the outside of the product. This proves that the product is 100% original.</p>
          </div>
        </div>
        <hr />
      </div>
      <div className="seal">
         <img className="seal-imge" decoding="async" src={turky} alt="" />
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
          <p>Fast shipping over 200$</p>
        </div>
        <div className="box">
          <i className="fas fa-trophy"></i>
          <p>Turkish perfume brand</p>
        </div>
      </div>
    </div>
    <div className="tyt">
       <h5>About sales and returns</h5>
        <p>How do I order?</p>

        <p>When performing a search by typing the product code from the search line in the upper right corner of the homepage, the results are listed as 50ml.</p>

        <p>Depending on the density, your orders will be delivered to the consignment within 7 working days at the latest, and the shipments tracking number will be sent to you via email or SMS. Orders placed on public holidays will be delivered to the shipment within 7 working days at most after the end of the holiday, depending on the density.</p>

        <p>Please follow up your order with the tracking number sent to you from the shipping company (web addresses will be written for local express or shipment tracking platform) for delivery.</p>

        <p>The return period is 14 days. Shipping is the responsibility of the customer. The product invoice should be sent to the warehouse address of Vega Perfumse. After the product (s) has been delivered, the right of withdrawal cannot be exercised if the product packaging, package, tape and similar protective elements have been opened, in accordance with clause “ç” of Article 15 of the Regulation on Distance Sales Contracts.</p>

        <p>If the product is inspected during the delivery of the goods and there is physical damage, the package should not be received from the shipping company. After receiving the product from the shipping company, physically damaged products cannot be returned.</p>

        <p>If the package is not accepted and a report is kept, Vega Perfumse  will ensure a new delivery as soon as possible.</p>

        <p>If there is an error in production;</p>

        <p>Freight belongs to crude. The product invoice should be sent to the warehouse address of Vega Perfumse title, it will be replaced with a defective product or refund will be given within 14 working days.</p>
      </div>
      <Footer />
    </>
  );
};

export default About;
