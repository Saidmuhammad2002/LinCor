import { Link } from "react-router-dom";
import img1 from "../../../assets/img/ads-img1.png";
import img2 from "../../../assets/img/ads-image2.png";
import img3 from "../../../assets/img/ads-image3.png";
import arrow from ".././../../assets/img/ads-arrow.svg";
import "./_ads.scss";

export const Ads: React.FC = () => {
  return (
    <section className="ads">
      <div className="container">
        <div className="ads-wrapper">
          <div className="ads__left">
            <h2 className="ads__heading">Koreaga Go</h2>
            <p className="ads__text">
              Bu topik darsliklari sizning yuqori daraja olishingizga yordam
              beradi
            </p>
            <Link className="ads__link" to="/videos">
              Boshladik
              <img src={arrow} alt="" />
            </Link>
          </div>

          <div className="ads__right">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img1} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
