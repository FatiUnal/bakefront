import "./TeamListCard.scss";
function TeamlisCard({ proje }) {
  const handleDownload = (e) => {
    e.preventDefault(); // Linkin normal davranışını durdur
    const link = document.createElement("a");
    link.href = proje.images[0];
    link.setAttribute("download", "file");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <li className="glide__slide">
      <a href={proje.images[0]} className="card" onClick={handleDownload}>
        <div className="img">
          <img src={proje.coverImage} alt="" />
        </div>

        <div className="cardSection">
          <div className="CardTop">
            <h4 className="title">{proje.title}</h4>
            <p className="desc">{proje.titleContent}</p>
          </div>
        </div>
      </a>
    </li>
  );
}

export default TeamlisCard;
