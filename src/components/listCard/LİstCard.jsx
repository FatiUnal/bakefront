import { Link } from "react-router-dom";
import "./ListCard.scss";

const LİstCard = ({ proje }) => {
  const handleDownload = (e) => {
    e.preventDefault(); // Linkin normal davranışını durdur
    const link = document.createElement("a");
    link.href = proje.images[0];
    link.setAttribute("download", "file");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="projeCard">
      <a href={proje.images[0]} className="img" onClick={handleDownload}>
        <img src={proje.coverImage} alt="kapakresmi" />
      </a>
      <div className="detayCard">
        <div className="desc">
          <a href={proje.images[0]} className="title">
            <h3>{proje.title}</h3>
          </a>
          <div className="text">
            <p>{proje.titleContent}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LİstCard;
