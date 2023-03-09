import { useState } from "react";
import { Link } from "react-router-dom";
import arrowDown from "../../../../../assets/img/header-arrow-down.svg";
import bookIcon from "../../../../../assets/img/header-drop-book.svg";
import paymentIcon from "../../../../../assets/img/header-drop-payment.svg";
import userIcon from "../../../../../assets/img/header-drop-user.svg";
import phoneIcon from "../../../../../assets/img/header-drop-phone.svg";
import logoutIcon from "../../../../../assets/img/header-drop-logout.svg";
import "./_header-dropdown.scss";

export const HeaderDropdown: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  return (
    <div
      className="header-dropdown"
      onClick={() => setShowDropdown((prev) => !prev)}
    >
      <div className="header-user__pfp">Sh</div>
      <div className="header-user__name">Shahboz</div>
      <img
        className="header-dropdown__arrow"
        src={arrowDown}
        alt="Arrow down"
      />
      <div className={showDropdown ? "header-drop--active" : "header-drop"}>
        <div className="header-drop__top">
          <div className="header-user__pfp header-drop__pfp">Sh</div>
          <div className="header-user__name header-drop__name">
            Shahboz Aliyev
          </div>
        </div>
        <div className="header-drop__nav">
          <Link to="/my-courses" className="header-drop__link">
            Mening kurslarim
            <img src={bookIcon} width={20} height={20} alt="" />
          </Link>
          <Link to="/my-courses" className="header-drop__link">
            To'lov
            <img src={paymentIcon} width={20} height={20} alt="" />
          </Link>
          <Link to="/my-courses" className="header-drop__link">
            Profilim
            <img src={userIcon} width={22} height={22} alt="" />
          </Link>
          <Link to="/my-courses" className="header-drop__link">
            A'loqa
            <img src={phoneIcon} width={20} height={20} alt="" />
          </Link>
          <Link to="/my-courses" className="header-drop__link">
            Chiqish
            <img src={logoutIcon} width={20} height={20} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};
