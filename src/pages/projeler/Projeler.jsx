import "./Projeler.scss";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import LİstCard from "../../components/listCard/LİstCard";
import { useEffect, useState } from "react";
import axios from "axios";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import { BASE_URL } from "../../config/api";
import Loading from "../loading/Loading";
import Pagination from "../../components/Pagination/Pagination";
import { useNavigate, useParams } from "react-router-dom";
import BrowserUpdatedIcon from "@mui/icons-material/BrowserUpdated";

const Projeler = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [projeler, setProjeler] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentItems, setCurrentItems] = useState([]);
  const { categoryname } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/api/v1/post/category?category=${categoryname}`
        );

        const data = response.data;
        setProjeler(data);

        setTimeout(() => {
          setLoading(false);
        }, 500);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [categoryname]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen); // Sidebar'ı açma ve kapama işlemi
  };

  const filterByRoomCount = (yeniCategory) => {
    navigate(`/kategoriler/${yeniCategory}`); // Kesin yolu kullan
    setSidebarOpen(false);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="projeler">
      <div className="container">
        <div className="contentProjeler">
          <sidebar className={`sidebar ${sidebarOpen ? "open" : ""}`}>
            <div className="categories">
              <div className="title">
                <h3 style={{ fontSize: "1.2rem" }}>Kategoriler</h3>
                <hr />
              </div>
              <div className="listCategories">
                <ul>
                  <li className={categoryname === "cup" ? "selected" : ""}>
                    <button onClick={() => filterByRoomCount("cup")}>
                      <span>Cup Serisi</span>
                      <ChevronRightOutlinedIcon
                        style={{ color: "black", fontSize: "1rem" }}
                      />
                    </button>
                  </li>

                  <li className={categoryname === "cake" ? "selected" : ""}>
                    <button onClick={() => filterByRoomCount("cake")}>
                      <span>Cake Serisi</span>
                      <ChevronRightOutlinedIcon
                        style={{ color: "black", fontSize: "1rem" }}
                      />
                    </button>
                  </li>

                  <li
                    className={categoryname === "cheesecake" ? "selected" : ""}
                  >
                    <button onClick={() => filterByRoomCount("cheesecake")}>
                      <span>Cheesecake Serisi</span>
                      <ChevronRightOutlinedIcon
                        style={{ color: "black", fontSize: "1rem" }}
                      />
                    </button>
                  </li>

                  <li className={categoryname === "bakeand" ? "selected" : ""}>
                    <button onClick={() => filterByRoomCount("bakeand")}>
                      <span>Bake And Serisi</span>
                      <ChevronRightOutlinedIcon
                        style={{ color: "black", fontSize: "1rem" }}
                      />
                    </button>
                  </li>

                  <li className="menu-list-item">
                    <a
                      className="menu-link"
                      style={{ cursor: "pointer" }}
                      target="_blank"
                      href="https://bakeandbondpatisserie.com/api/v1/upload/bake/images/49/b4711c7f-5887-41b3-8322-fd22c8f9f8be.pdf"
                      download
                    >
                      <span>Kataloğu İndir</span>
                      <BrowserUpdatedIcon
                        style={{ color: "black", fontSize: "1rem" }}
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </sidebar>

          <div className="projeList">
            <div className="title">
              <div
                style={{
                  display: "flex",
                  gap: "2rem",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h3 style={{ fontSize: "1.2rem" }}>Ürünler</h3>
                <div className="filterIcon" onClick={toggleSidebar}>
                  <FilterAltOutlinedIcon
                    style={{
                      fontSize: "1.5rem",
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  />
                </div>
              </div>
              <hr />
            </div>
            <div className="list">
              {projeler.length > 0 ? (
                currentItems.map((proje, index) => (
                  <LİstCard key={index} proje={proje} />
                ))
              ) : (
                <p className="noDaire">Tatlılar Bulunamadı...</p>
              )}
            </div>

            <Pagination
              itemsPerPage={8}
              items={projeler}
              setCurrentItems={setCurrentItems}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projeler;
