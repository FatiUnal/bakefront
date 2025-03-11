import { Link } from "react-router-dom";
import "./ListCard.scss";

const LİstCard = ({ proje }) => {
  return (
    <div className="projeCard">
      <Link to={`/urunler/${proje.id}`} className="img">
        <img src={proje.coverImage} alt="" />
      </Link>
      <div className="detayCard">
        <div className="desc">
          <Link to={`/urunler/${proje.id}`} className="title">
            <h3>{proje.title}</h3>
          </Link>
          <div className="text">
            <p>{proje.titleContent}</p>
          </div>
        </div>
        {/* <div className="buttonCard">
          <Link to={`/urunler/${proje.id}`}>
            <button>Ürüne Git</button>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default LİstCard;
