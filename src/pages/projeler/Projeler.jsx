import "./Projeler.scss";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import LİstCard from "../../components/listCard/LİstCard";
import { useEffect, useState } from "react";
import axios from "axios";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import { BASE_URL } from "../../config/api";
import Loading from "../loading/Loading";
import Pagination from "../../components/Pagination/Pagination";

const Projeler = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [projeler, setProjeler] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentItems, setCurrentItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/api/v1/post/small?page=0&size=100`
        );

        const data = response.data;
        setProjeler(data);
        setFilteredProjects(data);

        setTimeout(() => {
          setLoading(false);
        }, 500);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen); // Sidebar'ı açma ve kapama işlemi
  };

  const filterByRoomCount = (categoryName) => {
    if (categoryName) {
      const filtered = projeler.filter(
        (proje) => proje.categoryName === categoryName
      );
      setFilteredProjects(filtered);
      setSidebarOpen(false);
    } else {
      setFilteredProjects(projeler); // Tüm projeleri geri yükler
      setSidebarOpen(false);
    }
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
                  <li>
                    <button onClick={() => filterByRoomCount(null)}>
                      <span>Tüm Ürünler</span>
                      <ChevronRightOutlinedIcon
                        style={{ color: "black", fontSize: "1rem" }}
                      />
                    </button>
                  </li>

                  <li>
                    <button onClick={() => filterByRoomCount("cup")}>
                      <span>Cup Serisi</span>
                      <ChevronRightOutlinedIcon
                        style={{ color: "black", fontSize: "1rem" }}
                      />
                    </button>
                  </li>

                  <li>
                    <button onClick={() => filterByRoomCount("cake")}>
                      <span>Cake Serisi</span>
                      <ChevronRightOutlinedIcon
                        style={{ color: "black", fontSize: "1rem" }}
                      />
                    </button>
                  </li>

                  <li>
                    <button onClick={() => filterByRoomCount("others")}>
                      <span>Diğerleri</span>
                      <ChevronRightOutlinedIcon
                        style={{ color: "black", fontSize: "1rem" }}
                      />
                    </button>
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
              {filteredProjects.length > 0 ? (
                currentItems.map((proje, index) => (
                  <LİstCard key={index} proje={proje} />
                ))
              ) : (
                <p className="noDaire">Tatlılar Bulunamadı...</p>
              )}
            </div>

            <Pagination
              itemsPerPage={8}
              items={filteredProjects}
              setCurrentItems={setCurrentItems}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projeler;
