import "./Hakkimizda.scss";
import img from "/images/hakkimizda/kolaj2.jpeg";
import img3 from "/images/hakkimizda/bake.jpeg";

const Hakkimizda = () => {
  return (
    <div className="hakkimizda">
      <div className="projectName">
        <img src={img} alt="" />
        <div className="container">
          <div className="bannerText">
            <div className="title">
              <h1>Biz Kimiz</h1>
            </div>
          </div>
        </div>

        <div className="background"></div>
      </div>

      <div className="section">
        <div className="container">
          <div className="content">
            <div className="img">
              <img src={img3} alt="" />
            </div>

            <div className="detay">
              <h3>Misyonumuz</h3>
              <div className="desc">
                <p>
                  Samimi ve Lezzet Odaklı Yaklaşım: <br />
                  Bake and Bond olarak, her lokmada mutluluk ve samimiyeti
                  hissettiren, taptaze ve el yapımı tatlılar sunmayı
                  amaçlıyoruz. Doğal malzemeler kullanarak hazırladığımız özel
                  tariflerimizle müşterilerimize hem lezzetli hem de güvenilir
                  ürünler sunmak için çalışıyoruz.
                </p>

                <p>
                  Yaratıcılık ve Kalite Odaklı Yaklaşım:
                  <br /> Tatlı dünyasına yenilikçi ve yaratıcı tarifler
                  kazandırarak, her damak zevkine hitap eden özgün lezzetler
                  sunuyoruz. Kaliteli malzemeler ve ustalığımızla
                  müşterilerimize en iyisini sunmayı ilke ediniyoruz.
                </p>

                <p>
                  Topluluk ve Paylaşım Odaklı Yaklaşım:
                  <br /> Her tatlımızda dostluğu ve paylaşımı teşvik ediyoruz.
                  Bake and Bond olarak, tatlılarımızla insanların
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hakkimizda;
