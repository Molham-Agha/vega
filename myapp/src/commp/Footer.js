import "./Footer.css";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="imagfooter">
        <img className="logofooter" decoding="async" src="https://res.cloudinary.com/dag9fwtvk/image/upload/v1693359337/img/logo_osuq9q.jpg" alt="" />
      </div>
      <footer className="footer">
        <div className="social">
            <Link to="https://www.facebook.com/profile.php?id=61550342575808&mibextid=ZbWKwL"><i className="fa-brands fa-facebook-f fa-bounce"></i></Link>
            <Link to="https://instagram.com/vega_parfum1?igshid=OGQ5ZDc2ODk2ZA==" ><i className="fa-brands fa-instagram fa-bounce"></i></Link>
            <Link to="http://wa.me/+905518838677" target="_blank"><i className="fa-brands fa-whatsapp fa-bounce"></i></Link>
            <Link to="mailto:vegaparfum184@gmail.com" target="_blank"><i className="fa-solid fa-envelope fa-bounce"></i></Link>
        </div>
        <ul className="list">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/Man">Man</Link>
            </li>
            <li>
                <Link to="/Woman">Woman</Link>
            </li>
            <li>
                <Link to="/About">About</Link>
            </li>
            <li>
                <Link to="/Contact">Contact</Link>
            </li>
        </ul>
        <p className="copyright">
          <Link  to="https://my-web-react-48daf.web.app/">Code by Molham 2023 ©</Link>
        </p>
      </footer>
     
    </>
  );
};

export default Footer;
