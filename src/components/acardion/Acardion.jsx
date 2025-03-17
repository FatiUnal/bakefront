import "./Acardion.scss";

import image2 from "/images/acardion/dilarahanim.jpeg";
import image3 from "/images/acardion/zeynephanim.jpeg";

function Acardion() {
  return (
    <div className="acardion-template">
      <ul className="acardion">
        <li>
          <img src={image2} alt="" />
          <div className="content">
            <span>
              <h2>Cansu Dilara</h2>
              <p>Co-Founder</p>
            </span>
          </div>
        </li>

        <li>
          <img src={image3} alt="" />
          <div className="content">
            <span>
              <h2>Zeynep Özdoğru</h2>
              <p>Co-Founder</p>
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Acardion;
