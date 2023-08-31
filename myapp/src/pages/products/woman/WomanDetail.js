import { Link, useParams } from "react-router-dom";
import WomanData from "./WomanData";

function WomanDetail() {
  const { id } = useParams();
  const thisProduct = WomanData.find((prod) => prod.id === id);

  return (
    <div className="user">
      <div className="user-image">
        <img src={thisProduct.image2} alt="" />
        <img src={thisProduct.image3} alt="" />
      </div>
      <div className="article">
        <h1>{thisProduct.name}</h1>
        <h2>Code: {thisProduct.id2}</h2>
        <h5>
          50 {thisProduct.cc} | 1.7 {thisProduct.cc1}
        </h5>
        <p>{thisProduct.description}</p>
        <div class="rate">
          <i class="filled fas fa-star"></i>
          <i class="filled fas fa-star"></i>
          <i class="filled fas fa-star"></i>
          <i class="filled fas fa-star"></i>
          <i class="far fa-star"></i>
        </div>
        <Link to="http://wa.me/+905518838677" target="_blank">
          Buy Now
        </Link>
      </div>
    </div>
  );
}

export default WomanDetail;
