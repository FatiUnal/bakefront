import "./ListCard.scss";

const LİstCard = ({ proje }) => {
  return (
    <div className="projeCard">
      <a href={proje.images[0]} target="_blank" className="img" download>
        <img src={proje.coverImage} alt="kapakresmi" />
      </a>
      <div className="detayCard">
        <div className="desc">
          <a href={proje.images[0]} className="title">
            <h3>{proje.title}</h3>
          </a>
          {/* <div className="text">
            <p>{proje.titleContent}</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default LİstCard;
