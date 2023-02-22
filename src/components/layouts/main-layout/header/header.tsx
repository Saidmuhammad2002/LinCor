import { Link } from "react-router-dom";
import userIcon from "../../../../assets/img/header-user.svg";
import "./_header.scss";

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <div className="header__left">
            <Link className="header__logo" to="/">
              LinCor
            </Link>

            <nav className="header__nav">
              <Link className="header__nav__link" to="/">
                Course
              </Link>
              <Link className="header__nav__link" to="/">
                Topic
              </Link>
              <Link className="header__nav__link" to="/">
                Koreada O‘qish
              </Link>
              <Link className="header__nav__link" to="/">
                To’lov
              </Link>
              <Link className="header__nav__link" to="/">
                Contacts
              </Link>
            </nav>
          </div>

          <Link className="header__login" to="auth/login">
            <img src={userIcon} alt="User" width={20} height={20} />
            Kirish
          </Link>
        </div>
      </div>
    </header>
  );
};
