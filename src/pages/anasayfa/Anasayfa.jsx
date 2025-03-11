import "./Anasayfa.scss";
import { useEffect, useState } from "react";
import Glide from "@glidejs/glide";

import img1 from "/images/slider/kapak1.jpg";
import img3 from "/images/slider/kapak3.jpg";
import img2 from "/images/slider/kapak2.png";

import cake from "/images/anasayfa/cake.jpg";
import cheesecake from "/images/anasayfa/cheesecake.jpg";

import kolaj3 from "/images/anasayfa/dikdortgen.jpeg";
import anaUrun from "/images/anasayfa/kolaj.png";

import Baslik from "./../../components/baslik/Baslik";
import Acardion from "../../components/acardion/Acardion";
import ProjelerGlide from "../../components/ProjerlerGlide/ProjelerGlide";

import axios from "axios";
import { BASE_URL } from "../../config/api";
import { Link } from "react-router-dom";
import Loading from "../loading/Loading";
import CardItem from "../../components/cardItem/CardItem";

const Anasayfa = () => {
  const posts = [
    { img: "taze.jpg", title: "Taze Malzemeler" },
    { img: "elyapimi.jpg", title: "El Yapımı" },
    { img: "memnuniyet.jpg", title: "Müşteri Memnuniyeti" },
    { img: "hizliteslimat.jpg", title: "Hızlı Teslimat" },
    { img: "sunum.jpg", title: "Sunum" },
  ];

  const [projeler, setProjeler] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/api/v1/post/small?page=0&size=10`
        );
        setProjeler(response.data);
        setLoading(false);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (!loading) {
      const glide = new Glide(".glide", {
        type: "carousel",
        startAt: 0,
        perView: 1,
        focusAt: "center",
        autoplay: 3000,
      });

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

      glide.mount();
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

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="anasayfa">
      <div className="glide">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            <li className="glide__slide">
              <img src={img1} alt="Bake and Bond" />
              <div className="container">
                <div className="bannerText">
                  <div className="title">
                    <h1>Bake & Bond</h1>
                    <h3>Patisserie</h3>
                  </div>
                </div>
              </div>
              <div className="backgroundtwo"></div>
            </li>
            <li className="glide__slide">
              <img src={img2} alt="Slide 1" />
              <div className="container">
                <div className="bannerText">
                  <div className="title">
                    <h1>Karşı koyulamaz</h1>
                    <h3>Lezzet</h3>
                  </div>
                </div>
              </div>
              <div className="background"></div>
            </li>
            <li className="glide__slide">
              <img src={img3} alt="Slide 1" />
              <div className="container">
                <div className="bannerText">
                  <div className="title">
                    <h1>Taptaze</h1>
                    <h3>meyveler</h3>
                  </div>
                </div>
              </div>
              <div className="background"></div>
            </li>
          </ul>
        </div>
      </div>

      <div className="container">
        <div className="product-cards">
          <CardItem
            title={"Cheesecake'ler"}
            desc={"Bake And 'Cheese' ile lezzeti keşfedin"}
            buttonText={"Tümünü Gör"}
            img={cheesecake}
          />
          <CardItem
            title={"Cake Şöleni"}
            desc={"Bake And 'Cake' serisini bir deneyimleyin deriz."}
            buttonText={"Tümünü Gör"}
            img={cake}
          />
        </div>
      </div>

      <div className="anaProject">
        <div className="container">
          <div className="populerProject">
            <div className="mobileTitle">
              <h3 style={{ fontSize: "1.5rem" }}>
                Bake And Bond&apos;un serileri
              </h3>
            </div>
            <div className="subDetay">
              <div className="imgContainer">
                <img className="first" src={anaUrun} alt="" />
                <img className="seccond" src={kolaj3} alt="" />
              </div>
              <div className="textContainer">
                <h3 className="projectName">
                  | Her biri bizim için değerli...
                </h3>
                <h1>
                  <i>&apos;Bake And&apos;</i> Serisi
                </h1>

                <p className="desc">
                  🛎️ Restoran, kafe ve otellere tatlı, cookie ve pasta üretimi!
                  <br />
                  🍰 El emeği tadında, seri üretim kalitesinde
                </p>

                <p className="desc">
                  🎂 El yapımı özen, endüstriyel üretim gücüyle buluşuyor! Her
                  zevke hitap eden lezzetlerimizle, menülerinizi
                  zenginleştiriyor ve misafirlerinize unutulmaz tatlar sunmanızı
                  sağlıyoruz.
                </p>
                <div className="button">
                  <Link to={"/urunler"}>Ürünlere Git</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fullImg">
        <div className="container">
          <div className="fullImgContent">
            <Baslik
              title={"Tüm Lezzetlerimizi Görün"}
              desc={"Her şey sizler için"}
            />
            <Link to={"/urunler"} className="btn-fullImg">
              Ürünlerimize Git
            </Link>
          </div>
        </div>
      </div>

      <div className="bestTeam">
        <div className="container">
          <div className="content">
            <div className="left">
              <Baslik
                title="Ürünlerimiz"
                desc="Tümü için ürünlerimiz sayfasına göz atın"
              />
            </div>
            <hr />
            <div className="TeamlistCards">
              <ProjelerGlide
                key={window.location.pathname}
                perView={3}
                projeler={projeler}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="whoUsing">
        <div className="container">
          <div className="content">
            <Acardion />
            <div className="left">
              <Baslik title={"İyi iş iyi ekipten çıkar"} />

              <p>
                Bake and Bond’un arkasındaki tutku dolu hikaye, el yapımı
                pastalara olan sevgimizle başladı. Her tarifte kaliteyi ve
                lezzeti önceliklendirerek, özel günlerinize tat katmayı
                hedefliyoruz.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="altKısım">
          <div className="anaBaslik">
            <h3 className="anaTitle">Neden Biz</h3>
            <img src="images/Icon/question-mark.png" alt="" />
            <div className="anaDesc">
              <p>
                Bake and Bond olarak, her pastayı özenle ve en taze malzemelerle
                hazırlıyoruz. Özel tariflerimizle lezzeti zirveye taşırken,
                kişiye özel tasarımlarımızla unutulmaz anlar yaratıyoruz.
                Kalite, lezzet ve müşteri memnuniyeti bizim için her zaman
                önceliklidir.
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

      <div className="slider">
        <div className="slider-track">
          {Array.from({ length: 20 }, (_, index) => (
            <div key={index} className="slide">
              <img
                src={`/images/karePost/${index + 1}.jpeg`}
                alt={`Firma ${index + 1}`}
              />
            </div>
          ))}
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

export default Anasayfa;
