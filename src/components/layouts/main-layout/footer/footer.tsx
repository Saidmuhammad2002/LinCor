import { Link } from "react-router-dom";
import instaIcon from "../../../../assets/img/footer-insta.svg";
import fbIcon from "../../../../assets/img/footer-facebook.svg";
import tgIcon from "../../../../assets/img/footer-tg.svg";
import "./_footer.scss";

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer__top">
            <ul className="footer__list">
              <li className="footer__item">
                <h3 className="footer__logo">LinCor</h3>
                <p className="footer__item__text">
                  Bizning saytdan foydalanib o’z bilimingizni oshirib boring.
                </p>

                <div className="footer__top__socials">
                  <a
                    className="footer__top__link"
                    href="https://instagram.com"
                    rel="noreferrer noopener"
                    target={"_blank"}
                  >
                    <img
                      className="footer__socials"
                      src={instaIcon}
                      alt="Instagram"
                      width={48}
                      height={48}
                    />
                  </a>
                  <a
                    className="footer__top__link"
                    href="https://facebok.com"
                    rel="noreferrer noopener"
                    target={"_blank"}
                  >
                    <img
                      className="footer__socials"
                      src={fbIcon}
                      alt="Facebook"
                      width={48}
                      height={48}
                    />
                  </a>
                  <a
                    className="footer__top__link"
                    href="https://telegram.org"
                    rel="noreferrer noopener"
                    target={"_blank"}
                  >
                    <img
                      className="footer__socials"
                      src={tgIcon}
                      alt="Telegram"
                      width={48}
                      height={48}
                    />
                  </a>
                </div>
              </li>
            </ul>
            <ul className="footer__list">
              <li className="footer__item">
                <h3 className="footer__item__heading">Kurslar</h3>
                <Link className="footer__item__link" to="">
                  Boshlang‘ich daraja
                </Link>
                <Link className="footer__item__link" to="">
                  o‘rta daraja
                </Link>
                <Link className="footer__item__link" to="">
                  yuqori daraja
                </Link>
              </li>
            </ul>
            <ul className="footer__list">
              <li className="footer__item">
                <h3 className="footer__item__heading">Topik</h3>
                <Link className="footer__item__link" to="">
                  topik I
                </Link>
                <Link className="footer__item__link" to="">
                  Topik II
                </Link>
                <Link className="footer__item__link" to="">
                  EPS-Topik
                </Link>
              </li>
            </ul>
            <ul className="footer__list">
              <li className="footer__item">
                <h3 className="footer__item__heading">A'loqa</h3>
                <a className="footer__item__link" href="tel:998990062665">
                  Tel: +99899 000-99-01
                </a>
                <a
                  className="footer__item__link"
                  href="mailto:examplry@gmail.com"
                >
                  E-mail: examplry@gmail.com
                </a>
                <Link className="footer__item__link" to="">
                  EPS-Topik Google Play Apple Store rasmlari shu yerda turadi
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__bottom">
            <p className="footer__bottom__text">
              Barcha huquqlar himoyalangan 2023{" "}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
