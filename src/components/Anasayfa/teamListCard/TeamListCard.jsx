import { Link } from "react-router-dom";
import "./TeamListCard.scss";
function TeamlisCard({ proje }) {
  return (
    <li className="glide__slide">
      <Link to={`/urunler/${proje.id}`} className="card">
        <div className="img">
          <img src={proje.coverImage} alt="" />
        </div>

        <div className="cardSection">
          <div className="CardTop">
            <h4 className="title">{proje.title}</h4>
            <p className="desc">{proje.titleContent}</p>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default TeamlisCard;
