import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.scss";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setTimeout(() => {
      setIsMenuOpen(false);
    }, 300); // 500ms (yarım saniye) gecikme
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const handleDownload = (e) => {
    e.preventDefault(); // Linkin normal davranışını durdur
    const link = document.createElement("a");
    link.href =
      "https://bakeandbondpatisserie.com/api/v1/upload/bake/images/49/6826c87b-5010-4919-90f4-389f84c0c7ae.pdf";
    link.setAttribute("download", "file");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="header">
      <div className="headerTop">
        <div className="container">
          <div className="headerTopWrapper">
            <div>
              <span style={{ cursor: "pointer" }} onClick={handleDownload}>
                <span>Kataloğu İndir</span>
              </span>
            </div>
            <div className="iconss">
              <span className="none">Bizlerle iletişime geçin</span>
              <a
                href="https://www.instagram.com/bakeandbondpatisserie"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon className="icon" />
              </a>

              <a
                href="https://wa.me/905061671255"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon className="icon" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="headerBottom">
        <div className="container">
          <div className="headerWrapper">
            <Link className="logo" to="/">
              <img
                style={{ borderRadius: "5px" }}
                src="/images/logo/logoBakeSon.png"
                alt=""
              />
            </Link>

            <nav className={`navigation ${isMenuOpen ? "open" : ""}`}>
              <ul className="menu-list">
                <li className="menu-list-item">
                  <Link className="menu-link" to="/" onClick={closeMenu}>
                    Anasayfa
                  </Link>
                </li>
                <li>
                  <Link
                    className="menu-link"
                    to="/kategoriler"
                    onClick={closeMenu}
                  >
                    Ürünlerimiz
                  </Link>
                </li>
                <li className="menu-list-item">
                  <Link
                    className="menu-link"
                    to="/hakkimizda"
                    onClick={closeMenu}
                  >
                    Hakkımızda
                  </Link>
                </li>
                <li className="menu-list-item">
                  <Link
                    className="menu-link"
                    to="/iletisim"
                    onClick={closeMenu}
                  >
                    İletişim
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="hamburger" onClick={toggleMenu}>
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
