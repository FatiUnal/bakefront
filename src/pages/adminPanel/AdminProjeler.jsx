import "./AdminProjeler.scss";
import ListCardDelete from "../../components/listCardDelete/ListCardDelete";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../config/api";
import Loading from "../loading/Loading";
import Pagination from "../../components/Pagination/Pagination";
const AdminProjeSil = () => {
  const [projeler, setProjeler] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentItems, setCurrentItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/api/v1/post/small?page=0&size=1000`
        );

        setProjeler(response.data);
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="projeList">
      <div className="title">
        <h4>Projeler</h4>
        <hr />
      </div>

      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="list">
            {currentItems.map((proje, index) => (
              <ListCardDelete key={index} proje={proje} />
            ))}

            <Pagination
              itemsPerPage={8}
              items={projeler}
              setCurrentItems={setCurrentItems}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default AdminProjeSil;
