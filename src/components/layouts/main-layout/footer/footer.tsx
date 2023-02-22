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
            <div className="footer__top__left">
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
            </div>

            <div className="footer__top__right">
              <Link className="footer__top__link" to="">
                Koreada o‘qish
              </Link>
              <Link className="footer__top__link" to="">
                To’lov
              </Link>
              <Link className="footer__top__link" to="">
                Aloqa
              </Link>
            </div>
          </div>
          <div className="footer__bottom">
            <Link className="header__logo" to="/">
              LinCor
            </Link>

            <div className="footer__bottom__right">
              <a className="footer__phone" href="tel:+998940994001">
                +<span className="footer__phone--marked">99894</span> 099 40 01
              </a>

              <div className="footer__bottom__socials">
                <a
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
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
