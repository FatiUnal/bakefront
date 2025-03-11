import "./infoCard.scss";

function InfoCard({ img, value, tag }) {
  return (
    <div className="infoCard">
      <img className="iconCard" src={img} alt="" />
      <div className="textCard">
      <span>{tag}</span>
        <span>
          <b>{value}</b>
        </span>
      
      </div>
    </div>
  );
}

export default InfoCard;
