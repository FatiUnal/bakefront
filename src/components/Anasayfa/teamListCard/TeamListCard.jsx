import "./TeamListCard.scss";
function TeamlisCard({ proje }) {
  return (
    <li className="glide__slide">
      <a href={proje.images[0]} target="_blank" className="card" download>
        <div className="img">
          <img src={proje.coverImage} alt="" />
        </div>

        <div className="cardSection">
          <div className="CardTop">
            <h4 className="title">{proje.title}</h4>
            {/* <p className="desc">{proje.titleContent}</p> */}
          </div>
        </div>
      </a>
    </li>
  );
}

export default TeamlisCard;
