import ManData from "./ManData";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "../products.css"

const Man = () => {
  const products = ManData.map((product) => {
    return (
      <div className="product-cart" key={product.id}>
        <div className="box-p">
          <img className="imgpro" src={product.image} alt="" />
          <Link to={`/man/${product.id}`}>Show More</Link>
        </div>
      </div>
    );
  });

  return (
    <>
      <Helmet>
        <title>Man Page</title>
      </Helmet>
      <div className="product">{products}</div>
    </>
  );
};

export default Man;
