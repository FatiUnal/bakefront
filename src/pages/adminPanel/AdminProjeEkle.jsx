import { useState } from "react";
import "./AdminProjeEkle.scss";
import axios from "axios";
import { BASE_URL } from "../../config/api";
import { useNavigate } from "react-router-dom";
import Loading from "../loading/Loading";

const AdminProjeEkle = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("authToken");
  const [images, setImages] = useState([]);
  const [imgKapak, setImgKapak] = useState(null);
  const [formData, setFormData] = useState({
    sehir: "",
    ilce: "",
    title: "",
    price: "",
    sporSalon: false,
    content: "",
    context1: "",
  });
  const [isLoading, setIsloading] = useState(false);

  // Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    window.scrollTo(0, 0); // Sayfa her değiştiğinde en üst konuma kaydırma
    setIsloading(true);

    try {
      const response = await axios.post(`${BASE_URL}/api/v1/post`, formData, {
        headers: {
          Authorization: `Bearer ${token}`, // Authorization header'ı ekleyin
        },
      });

      if (response.status === 201) {
        const uploadFormData = new FormData();
        const kapakData = new FormData();

        // Resimleri Yükleme
        if (images.length > 0) {
          images.forEach((image) => {
            uploadFormData.append("images", image);
          });
        }

        //Kapak IMG Yükleme
        if (imgKapak) {
          kapakData.append("image", imgKapak);
        }

        // ID ekle (örneğin gönderiden dönen ID kullanılabilir)
        uploadFormData.append("id", response.data.id);
        kapakData.append("id", response.data.id);

        const responseImages = await axios.post(
          `${BASE_URL}/api/v1/image`,
          uploadFormData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );

        const kapakImages = await axios.post(
          `${BASE_URL}/api/v1/image/cover`,
          kapakData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );

        console.log("Resimler yüklendi:", responseImages.data);
        console.log("Kapak Resmi Yüklendi:", kapakImages.data);
      }

      setTimeout(() => {
        navigate("/admin/projeler");
        setIsloading(false);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  // Form Degisiklik
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    setImages((prevImages) => [...prevImages, ...files]);
  };

  const handleRemoveImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleKapakImageChange = (event) => {
    const file = event.target.files[0];
    setImgKapak(file);
  };

  const handleKapakRemoveImage = () => {
    setImgKapak(null);
  };

  return (
    <div className="projeList">
      <div className="title">
        <h4>Ürün Ekle</h4>
        <hr />
      </div>

      {isLoading ? (
        <Loading />
      ) : (
        <div className="projeEkle">
          <form onSubmit={handleSubmit}>
            <div className="uploader-container">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "2rem",
                }}
                className="baslikAndButton"
              >
                <h4>Ürün Resimleri Yükle</h4>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageUpload}
                  className="upload-input"
                  id="file-input"
                />

                <div>
                  <label
                    htmlFor="file-input"
                    style={{
                      cursor: "pointer",
                      display: "inline-block",
                      padding: "10px",
                      backgroundColor: "#315345",
                      color: "#fff",
                      borderRadius: "5px",
                    }}
                  >
                    {images.length > 0
                      ? `Resim Ekle: ${images.length}`
                      : "Resim Seç"}
                  </label>
                </div>
              </div>

              <div className="images-preview-container">
                {images.map((image, index) => {
                  return (
                    <div key={index} className="image-container">
                      <img
                        src={URL.createObjectURL(image)}
                        alt={`Uploaded Preview ${index}`}
                      />
                      <button
                        type="button"
                        className="remove-button"
                        onClick={() => handleRemoveImage(index)}
                      >
                        ✕
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="uploader-container">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "2rem",
                }}
                className="baslikAndButton"
              >
                <h4>Kapak Fotoğrafı Yükle</h4>
                <input
                  type="file"
                  accept="image/*"
                  className="upload-input"
                  id="kapakFoto"
                  onChange={handleKapakImageChange}
                  style={{ display: "none" }}
                />

                <div>
                  <label
                    htmlFor="kapakFoto"
                    style={{
                      cursor: "pointer",
                      display: "inline-block",
                      padding: "10px",
                      backgroundColor: "#315345",
                      color: "#fff",
                      borderRadius: "5px",
                    }}
                  >
                    {imgKapak ? "Resiim Değiştir" : "Resim Seç"}
                  </label>
                </div>
              </div>

              {imgKapak && (
                <div className="images-preview-container">
                  <div
                    className="image-container"
                    style={{ position: "relative" }}
                  >
                    <img
                      src={URL.createObjectURL(imgKapak)}
                      alt="Kapak"
                      style={{ maxWidth: "100%", maxHeight: "200px" }}
                    />
                    <button
                      className="remove-button"
                      style={{
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                        backgroundColor: "red",
                        color: "#fff",
                        border: "none",
                        borderRadius: "50%",
                        width: "30px",
                        height: "30px",
                        cursor: "pointer",
                      }}
                      type="button"
                      onClick={handleKapakRemoveImage}
                    >
                      ✕
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div>
              <label>
                Ürün İsmi:
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            <div>
              <label>
                Kategori:
                <select name="varlıkTypeDisabled" value={"house"} disabled>
                  <option value="house">Konut</option>
                  <option value="land">Arsa</option>
                </select>
                <input type="hidden" name="type" value="house" />
              </label>
            </div>

            <div>
              <label>
                Miktar (Gr):
                <input
                  type="text"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            <div>
              <label>
                Raf Ömrü:
                <input
                  type="text"
                  name="sehir"
                  value={formData.sehir}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            <div>
              <label>
                Porsiyon:
                <input
                  type="text"
                  name="ilce"
                  value={formData.ilce}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            <div>
              <label>
                Hayvansal Ürün Var:
                <input
                  type="checkbox"
                  name="sporSalon"
                  checked={formData.sporSalon}
                  onChange={handleChange}
                />
              </label>
            </div>

            <div>
              <label>
                Content:
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            <div>
              <label>
                Açıklama 1:
                <textarea
                  name="context1"
                  value={formData.context1}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            <div className="buttonContainer">
              <button type="submit">Ürün Ekle</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AdminProjeEkle;
