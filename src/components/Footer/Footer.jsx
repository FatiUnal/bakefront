import "./Footer.scss";
import InstagramIcon from "@mui/icons-material/Instagram";
import MapIcon from "@mui/icons-material/Map";
import PhoneIcon from "@mui/icons-material/Phone";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footerItem">
          <div className="logo">
            <a href="/">
              <img src="/images/logo/logoBakeSon.png" alt="Akıllı Logo" />
            </a>
          </div>
          <div className="metin">
            <p>
              Otellere, restoranlara ve kafelere özel tatlı ve pasta üretimiyle
              lezzeti sanata dönüştürüyoruz!
            </p>
            <p>
              Kaliteli malzemeler, özel tarifler ve taptaze lezzetler için
              bizimle iletişime geçin.
            </p>
          </div>
        </div>

        <div className="footerItem">
          <h3>Hizmetlerimiz</h3>
          <hr />
          <ul className="footerHizmet">
            <li>
              <span>Oteller İçin Toptan Sipariş</span>
            </li>
            <li>
              <span>Cafeler İçin Toptan Sipariş</span>
            </li>
            <li>
              <span>Restoranlar İçin Toptan Sipariş</span>
            </li>
          </ul>
        </div>

        <div className="footerItem">
          <h3>İletişim Bilgilerimiz</h3>
          <hr />
          <ul>
            <li className="sag">
              <div className="yeap">
                <PhoneIcon />

                <a href="tel:+905061671255">
                  <span style={{ marginRight: "-0.5rem" }} className="ici">
                    +90 506 167 12 55
                  </span>
                </a>
              </div>
            </li>

            <li className="sag">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/bakeandbondpatisserie"
              >
                <InstagramIcon />
                <span>bakeandbondpatisserie</span>
              </a>
            </li>

            <li className="sag">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://maps.app.goo.gl/s8dAiWk1m4CDW5JC7"
              >
                <MapIcon />
                <span>
                  Boğazkent, Atatürk Cd. No:17, 17110 Kepez, Çanakkale, Turkey
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr style={{ width: "100%", border: "1px solid #dee0ea" }} />

      <div className="container">
        <p style={{ fontSize: "0.85rem" }}>
          Copyright 2024 © Bake & Bond. Bütün Hakları Saklıdır.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
