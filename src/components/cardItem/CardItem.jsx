import { Link } from "react-router-dom";
import "./CardItem.scss";
const CardItem = ({ title, desc, buttonText, img, link }) => {
  return (
    <div className="cardItemm">
      <Link to={`/kategoriler/${link}`} className="card-content">
        <img src={img} alt="Peynir Çeşitleri" className="product-image" />
        <div className="text-content">
          <h2>{title}</h2>
          <p>{desc}</p>
          <Link to={`/kategoriler/${link}`} className="button green-button">
            {buttonText}
          </Link>
        </div>
      </Link>
    </div>
  );
};

export default CardItem;
