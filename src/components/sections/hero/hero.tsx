import { Link } from "react-router-dom";
import playerIcon from "../../../assets/img/hero-player.svg";
import "./_hero.scss";

export const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-wrapper">
          <h1 className="hero__heading">online Til o‘rgan Koreada o‘qi!</h1>
          <p className="hero__text">
            bitta siteni o‘zida bilim oling testdan o‘ting koreaga boring!
          </p>
          <Link className="hero__link" to="/videos">
            Birinchi dars
            <img src={playerIcon} alt="" />
          </Link>
        </div>
      </div>
    </section>
  );
};
