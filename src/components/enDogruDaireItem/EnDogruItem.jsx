import "./EnDogruItem.scss";
const EnDogruItem = ({ img, title }) => {
  return (
    <li className="glide__slide">
      <div className="postSlide">
        <img src={img} alt={title} />
        <div className="bottomBar">
          <h3>{title}</h3>
        </div>
      </div>
    </li>
  );
};

export default EnDogruItem;
