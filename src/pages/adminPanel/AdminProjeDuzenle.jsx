import { useEffect, useState } from "react";
import "./AdminProjeDuzenle.scss";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../../config/api";
import Loading from "../loading/Loading";

const AdminProjeDuzenle = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const token = localStorage.getItem("authToken");

  const [formData, setFormData] = useState({
    sehir: "",
    ilce: "",
    title: "",
    price: "",
    sporSalon: false,
    content: "",
    context1: "",
  });
  const [isLoading, setIsloading] = useState(true);

  const [images, setImages] = useState([]);
  const [imgKapak, setImgKapak] = useState(null);

  const [initialImages, setInitialImages] = useState([]); // İlk gelen resimler
  const [initialKapakImages, setInitialKapakImages] = useState(null); // İlk gelen kapak

  const [addedImages, setAddedImages] = useState([]); // Yeni eklenen resimler // buraya img dosyası gelecek
  const [removedImages, setRemovedImages] = useState([]); // Silinen resimler

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/api/v1/post/get-by-id?id=${id}`
        );
        if (response.status === 200) {
          setFormData((prevState) => ({
            ...prevState,
            sehir: response.data.postDetails.sehir || "",
            ilce: response.data.postDetails.ilce || "",
            title: response.data.title,
            content: response.data.content,
            price: response.data.postDetails.fiyat || "",
            sporSalon: response.data.postDetails.sporSalon || false,
            context1: response.data.postDetails.context1 || "",
          }));
          setImgKapak(response.data.coverImage);
          setImages(response.data.images);
          setInitialKapakImages(response.data.coverImage);
          setInitialImages(response.data.images);

          setTimeout(() => {
            setIsloading(false);
          }, 1000);
        }

        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const added = images.filter(
      (image) =>
        !initialImages.some((initialImage) => initialImage.id === image.id)
    );
    const removed = initialImages.filter(
      (image) => !images.some((images) => images.id === image.id)
    );

    setAddedImages(added);
    setRemovedImages(removed);
  }, [images, initialImages]);

  // Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    window.scrollTo(0, 0); // Sayfa her değiştiğinde en üst konuma kaydırma
    setIsloading(true);

    try {
      await axios.put(`${BASE_URL}/api/v1/post?id=${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`, // Authorization header'ı ekleyin
        },
      });

      if (imgKapak !== initialKapakImages) {
        console.log("kapak degisti");

        if (imgKapak === null) {
          const responseKapakDelete = await axios.delete(
            `${BASE_URL}/api/v1/image/cover-delete?postId=${id}`,
            {
              headers: {
                Authorization: `Bearer ${token}`, // Authorization header'ı ekleyin
              },
            }
          );
          console.log(responseKapakDelete.data);
        } else {
          const kapakData = new FormData();
          kapakData.append("image", imgKapak);
          kapakData.append("id", id);

          const kapakImagesResponse = await axios.post(
            `${BASE_URL}/api/v1/image/cover`,
            kapakData,
            {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data",
              },
            }
          );
          console.log(kapakImagesResponse);
        }
      }

      if (images !== initialImages) {
        if (addedImages.length > 0) {
          const formDataAdded = new FormData();
          addedImages.forEach((image) => {
            formDataAdded.append("images", image);
          });
          formDataAdded.append("id", id);
          await axios.post(`${BASE_URL}/api/v1/image`, formDataAdded, {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          });
        }

        if (removedImages.length > 0) {
          const formDataDeleted = new FormData();
          console.log("silinen", removedImages);
          removedImages.forEach((image) => {
            formDataDeleted.append("imagesId", image.id);
          });
          formDataDeleted.append("postId", id);

          await axios.delete(
            `${BASE_URL}/api/v1/image/delete-by-id`,

            {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data",
              },
              data: formDataDeleted,
            }
          );
        }
      }

      setTimeout(() => {
        navigate("/admin/projeler");
        setIsloading(false);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  // Form Değişiklik
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Resim Yükleme
  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    setImages((prevImages) => [...prevImages, ...files]);
  };

  // Resim Silme
  const handleRemoveImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  // Kapak Fotografı yükleme
  const handleKapakImageChange = (event) => {
    const file = event.target.files[0];
    setImgKapak(file);
  };

  // Kapak Fotografı silme
  const handleKapakRemoveImage = async () => {
    setImgKapak(null);
  };

  return (
    <div className="projeList">
      <div className="title">
        <h4>Ürün Düzenle</h4>
        <hr />
      </div>

      {isLoading ? (
        <Loading />
      ) : (
        <div className="projeDuzenle">
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
                <h4>Ürün Resimlerini Düzenle</h4>
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
                {images.map((image, index) => (
                  <div key={index} className="image-container">
                    <img
                      src={image.filename || URL.createObjectURL(image)}
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
                ))}
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
                      src={imgKapak.filename || URL.createObjectURL(imgKapak)}
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
                      onClick={handleKapakRemoveImage}
                      type="button"
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

            <div style={{ margin: "2rem 0rem" }}>
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
              <button type="submit">Düzenle</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AdminProjeDuzenle;
