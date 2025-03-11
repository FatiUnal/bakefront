import InfoCard from "../../components/infoCard/infoCard";
import MrGlide from "../../components/urunDetayGlide/MrGlide";
import "./ProjeDetay.scss";

import miktar from "/images/Icon/weighing-machine.png";
import omur from "/images/Icon/life-insurance.png";
import porsiyon from "/images/Icon/cake.png";
import hayvansalIcerik from "/images/Icon/milk-bottle.png";

import Baslik from "../../components/baslik/Baslik";
import { useEffect, useState } from "react";
import ProjelerGlide from "../../components/ProjerlerGlide/ProjelerGlide";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../config/api";
import Loading from "../loading/Loading";
import Glide from "@glidejs/glide";

const ProjeDetay = () => {
  const { id } = useParams();
  const [proje, setProje] = useState(null);
  const [digerProjeler, setDigerProjeler] = useState([]);
  const [selectedImage, setSelectedImage] = useState();
  const [loading, setLoading] = useState(true);

  const posts = [
    { img: "taze.jpg", title: "Taze Malzemeler" },
    { img: "elyapimi.jpg", title: "El Yapımı" },
    { img: "memnuniyet.jpg", title: "Müşteri Memnuniyeti" },
    { img: "hizliteslimat.jpg", title: "Hızlı Teslimat" },
    { img: "sunum.jpg", title: "Sunum" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/api/v1/post/get-by-id?id=${id}`
        );
        const response2 = await axios.get(
          `${BASE_URL}/api/v1/post/small?page=0&size=10`
        );

        setProje(response.data);
        setDigerProjeler(response2.data);
        setSelectedImage(response.data.images[0].filename);
        setTimeout(() => {
          setLoading(false);
        }, 500);

        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    if (!loading) {
      const glidePosts = new Glide(".glide-posts", {
        type: "carousel",
        autoplay: 2700,
        perView: 4,
        gap: 20,
        breakpoints: {
          900: {
            perView: 3,
          },

          768: {
            perView: 2,
          },
          350: {
            perView: 1,
          },
        },
      });

      glidePosts.mount();
    }
  }, [loading]);

  const faqs = [
    {
      question: "Pasta üretiminde kalite ve tazelik nasıl sağlanır?",
      answer:
        "Kalite ve tazelik için günlük üretim yapılır, taze ve güvenilir hammaddeler kullanılır. Üretim aşamalarında hijyen kurallarına dikkat edilerek soğuk zincir korunur ve ürünler uygun koşullarda saklanır.",
    },
    {
      question: "Pasta üretiminde hijyen ve güvenlik nasıl sağlanır?",
      answer:
        "Hijyen ve güvenlik için üretim alanı düzenli olarak temizlenir ve sterilize edilir. Çalışanlar eldiven, bone ve maske kullanır. Çapraz bulaşmayı önlemek için çiğ ve pişmiş ürünler ayrı tutulur.",
    },
    {
      question: "Pasta çeşitleri ve özel siparişler nasıl hazırlanır?",
      answer:
        "Müşteri taleplerine göre doğum günü, düğün ve özel günler için kişiye özel pastalar hazırlanır. Özel tarifler, diyet ve alerjen hassasiyetlerine uygun üretim yapılır.",
    },
    {
      question:
        "Pasta siparişlerinde teslimat ve saklama koşulları nasıl olmalı?",
      answer:
        "Teslimatlar soğuk zincir kurallarına uygun olarak yapılır. Pastalar, tazeliğini koruması için buzdolabında muhafaza edilmeli ve tüketim tarihi içinde tüketilmelidir.",
    },
  ];
  const [openIndex, setOpenIndex] = useState(null);
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image.filename); // Yeni resmi güncelle
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="projeDetay">
      <div className="container">
        <div className="tabletName">
          <h2>{proje.title}</h2>
        </div>

        <div className="mainTop">
          <div className="mainSectionSide">
            <div className="product-gallery">
              <div className="single-img">
                <img src={selectedImage} alt="Selected Product" />
              </div>
              <div className="product-thump">
                <MrGlide
                  images={proje.images}
                  onImageClick={handleImageClick}
                />
              </div>
            </div>

            <div className="detays">
              <InfoCard
                img={miktar}
                value={proje.postDetails.netQuantity}
                tag={"Net Miktar"}
              />
              <InfoCard
                img={omur}
                value={proje.postDetails.shelfLife}
                tag={"Raf Ömrü"}
              />
              <InfoCard
                img={porsiyon}
                value={proje.postDetails.portion}
                tag={"Porsiyon"}
              />
              <InfoCard
                img={hayvansalIcerik}
                value={proje.postDetails.animalProduct}
                tag={"Hayvansal Ürün"}
              />
            </div>
          </div>

          <div className="projectDetay">
            <h3>Özellikleri</h3>
            <div className="desc">
              <p>{proje.content}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="altKısım">
          <div className="anaBaslik">
            <h3 className="anaTitle">Neden Biz</h3>
            <img src="/images/Icon/question-mark.png" alt="" />
            <div className="anaDesc">
              <p>
                Bake and Bond olarak, her lokmada mutluluk ve samimiyeti
                hissettiren, taptaze ve el yapımı tatlılar sunmayı amaçlıyoruz.
                Doğal malzemeler kullanarak hazırladığımız özel tariflerimizle
                müşterilerimize hem lezzetli hem de güvenilir ürünler sunmak
                için çalışıyoruz.
              </p>
            </div>
          </div>

          <div className="glide-posts">
            <div className="glide__track" data-glide-el="track">
              <ul className="glide__slides">
                {posts.map((post, index) => (
                  <li key={index} className="glide__slide">
                    <div className="postSlide">
                      <img
                        src={`/images/postImg/${post.img}`}
                        alt={post.title}
                      />
                      <div className="bottomBar">
                        <h3>{post.title}</h3>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="digerProjeler">
        <div className="container">
          <div className="content">
            <div className="left">
              <Baslik
                title="Diğer Projelerimiz"
                desc="Sizler için listeledik"
              />
            </div>
            <div className="projects">
              <ProjelerGlide
                key={window.location.pathname}
                perView={4}
                projeler={digerProjeler}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="sikcaSorulan">
          <Baslik title="Sıkça Sorulanlar" desc="Siz sorun biz cevaplayalım" />
          <div className="acardions">
            {faqs.map((faq, index) => (
              <div
                className={`acardion ${openIndex === index ? "active" : ""}`}
                key={index}
              >
                <div
                  className="acardionSummary"
                  onClick={() => toggleAccordion(index)}
                >
                  <p>{faq.question}</p>
                  <span className="expandIcon">
                    {openIndex === index ? "-" : "+"}
                  </span>
                </div>
                <div
                  className="acardionDetails"
                  style={{ display: openIndex === index ? "block" : "none" }}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjeDetay;
