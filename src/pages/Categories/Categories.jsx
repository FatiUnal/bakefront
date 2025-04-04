import Baslik from "../../components/baslik/Baslik";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import "./Categories.scss";

import bakeandseries from "/images/kategoriResimleri/bakeandseries.jpg";
import cakeseries from "/images/kategoriResimleri/cakeseries.jpg";
import cheesecakeseries from "/images/kategoriResimleri/cheesecakeseries.jpg";
import cupsries from "/images/kategoriResimleri/cupsries.jpg";

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
        </div>
      </div>
    </div>
  );
};

export default Categories;
