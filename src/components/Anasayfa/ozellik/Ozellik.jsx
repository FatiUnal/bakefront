import "./Ozellik.scss";

const Ozellik = ({ tag, value, icon: Icon }) => {
  return (
    <div className="ozellikItem">
      {Icon && <img className="ozellikIconContainer" src={Icon} alt="" />}

      <div className="ozellikTextContainer">
        <h4>{tag}</h4>

        {/* <p>{value}</p> */}
      </div>
    </div>
  );
};

export default Ozellik;
