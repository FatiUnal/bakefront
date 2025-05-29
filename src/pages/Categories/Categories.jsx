import Baslik from "../../components/baslik/Baslik";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import "./Categories.scss";

import bakeandseries from "/images/kategoriResimleri/bakeand.jpeg";
import cakeseries from "/images/kategoriResimleri/cake.jpeg";
import cheesecakeseries from "/images/kategoriResimleri/cheseecake.jpeg";
import cupsries from "/images/kategoriResimleri/cup.jpeg";

const Categories = () => {
  return (
    <div className="categoriesPage">
      <div className="container">
        <Baslik title={"Kategorilerimiz"} desc={"Lütfen bir kategori seçin!"} />
        <div className="categoryCardsContent">
          <CategoryCard
            categorylinkname={"cup"}
            categoryName={"Cup Serisi"}
            img={cupsries}
          />
          <CategoryCard
            categorylinkname={"cake"}
            categoryName={"Cake Serisi"}
            img={cakeseries}
          />
          <CategoryCard
            categorylinkname={"cheesecake"}
            categoryName={"Cheesecake Serisi"}
            img={cheesecakeseries}
          />
          <CategoryCard
            categorylinkname={"bakeand"}
            categoryName={"Bake And Serisi"}
            img={bakeandseries}
          />
          <a
            className="categorycard"
            target="_blank"
            href="https://bakeandbondpatisserie.com/api/v1/upload/bake/images/49/b4711c7f-5887-41b3-8322-fd22c8f9f8be.pdf"
            download
          >
            <div className="categoryContent">
              <h3>Kataloğu İndirin</h3>
              <div className="backgroundImg">
                <img
                  src={"/images/kategoriResimleri/katalog.jpg"}
                  alt="kategori"
                />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Categories;
