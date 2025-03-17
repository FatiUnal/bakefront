import "./Iletisim.scss";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";

const Iletisim = () => {
  return (
    <div className="iletisim">
      <div className="container">
        <div className="content">
          <div className="map">
            <iframe
              className="iframe"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12206.261756721848!2d26.39565!3d40.1074008!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b1aa1af2ec88a7%3A0xb6bf38fe8f17afc0!2zQm_En2F6a2VudCwgQXRhdMO8cmsgQ2QuIE5vOjE3LCAxNzExMCBLZXBlei_Dh2FuYWtrYWxlIE1lcmtlei_Dh2FuYWtrYWxl!5e0!3m2!1str!2str!4v1741664197088!5m2!1str!2str"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="infoIletisim">
            <div className="itemIletisim">
              <h3>Adres Bilgilerimiz</h3>
              <p>
                Boğazkent, Atatürk Cd. No:17, 17110 Kepez, Çanakkale, Turkey
              </p>
            </div>

            <div className="itemIletisim">
              <h3>Telefon Numaralarımız</h3>
              <div className="itemList">
                <LocalPhoneIcon />
                <p className="phoness">
                  <a href="tel:+905061671255">+90 506 167 12 55</a>
                  <a href="tel:+905316457947">+90 531 645 79 47</a>
                </p>
              </div>
            </div>

            <div className="itemIletisim">
              <h3>Medya Hesaplarımız</h3>
              <div className="medyas">
                <a href="mailto:bakeandbondd@gmail.com" className="itemList">
                  <EmailIcon />
                  <p>bakeandbondd@gmail.com</p>
                </a>
                <a
                  id="sea"
                  target="_blank"
                  href="https://www.instagram.com/bakeandbondpatisserie"
                  className="itemList"
                >
                  <InstagramIcon />
                  <p>bakeandbondpatisserie</p>
                </a>
              </div>
            </div>
            <div className="itemIletisim">
              <h3>Mesai Saatlerimiz</h3>
              <div className="medyas">
                <div className="itemList">
                  <h4>Haftaiçi:</h4>
                  <p>08.00 - 19.00</p>
                </div>
                <div className="itemList">
                  <h4>Hafta Sonu:</h4>
                  <p>08.00 - 19.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Iletisim;
