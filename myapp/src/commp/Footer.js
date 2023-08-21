import "./Footer.css";
import logo2 from "../images/des1/Untitled-1.png"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="imagfooter">
        <img className="logofooter" decoding="async" src={logo2} alt="" />
      </div>
      <footer className="footer">
        <div className="social">
            <Link to="https://www.facebook.com/profile.php?id=61550342575808&mibextid=ZbWKwL"><i className="fa-brands fa-facebook-f fa-bounce"></i></Link>
            <Link to="https://instagram.com/vega_parfum_?igshid=MzRlODBiNWFlZA==" target="_blank"><i className="fa-brands fa-instagram fa-bounce"></i></Link>
            <Link to="http://wa.me/+905518838677" target="_blank"><i className="fa-brands fa-whatsapp fa-bounce"></i></Link>
            <Link to="mailto:vegaparfum184@gmail.com" target="_blank"><i className="fa-brands fa-google fa-bounce"></i></Link>
        </div>

        <ul className="list">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/Forman">For Man</Link>
            </li>
            <li>
                <Link to="/Forwoman">For Woman</Link>
            </li>
            <li>
                <Link to="/About">About</Link>
            </li>
            <li>
                <Link to="/Contact">Contact</Link>
            </li>
        </ul>
        <p className="copyright">
            footer react.js /
        </p>
      </footer>
     
    </>
  );
};

export default Footer;
