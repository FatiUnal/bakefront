import MapIcon from "@mui/icons-material/Map";
import PhoneIcon from "@mui/icons-material/Phone";
import "./FooterTop.scss";

const FooterTop = () => {
  return (
    <div className="dikkat">
      <div className="container dikkatItems">
        <div className="dikkatItem">
          <PhoneIcon fontSize="large" className="iconDikkat" />

          <div className="infoDikkat">
            <h3>Bizlere Ulaşın: +90 506 167 12 55</h3>
            <p>
              Yukarıdaki telefon numarası ile gönül rahatlığıyla iletişim
              kurabilirsiniz. Telefonumuz sizlere 7/24 açık
            </p>
            <div>
              <a href="tel:+905061671255">
                <button>Hemen Ara</button>
              </a>
            </div>
          </div>
        </div>

        <div className="dikkatItem">
          <MapIcon fontSize="large" className="iconDikkat" />

          <div className="infoDikkat">
            <h3>Adres İçin</h3>
            <p>Boğazkent, Atatürk Cd. No:17, 17110 Kepez, Çanakkale, Turkey</p>
            <div>
              <a
                target="_blank"
                href="https://maps.app.goo.gl/s8dAiWk1m4CDW5JC7"
              >
                <button>Yol Tarifi Al</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
