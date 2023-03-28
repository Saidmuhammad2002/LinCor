import { useAuth } from '@/utils/hooks';
import arrowDown from '@assets/img/header-arrow-down.svg';
import bookIcon from '@assets/img/header-drop-book.svg';
import logoutIcon from '@assets/img/header-drop-logout.svg';
import paymentIcon from '@assets/img/header-drop-payment.svg';
import phoneIcon from '@assets/img/header-drop-phone.svg';
import userIcon from '@assets/img/header-drop-user.svg';
import arrow from '@assets/img/short-arrow.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import cls from './header-dropdown.module.scss';

export const HeaderDropdown: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const user = useAuth();
  if (user) {
    const fullName = user.first_name.trim() + ' ' + user.last_name.trim();

    return (
      <div
        className={cls.header_dropdown}
        onClick={() => setShowDropdown((prev) => !prev)}
      >
        {user.image ? (
          <img src={user.image} className={cls.header_user__pfp} alt="" />
        ) : (
          <div className={cls.header_user__pfp}>{fullName[0]}</div>
        )}
        <div className={cls.header_user__name}>{user.first_name}</div>
        <img
          className={cls.header_dropdown__arrow}
          src={arrowDown}
          alt="Arrow down"
        />
        <div className={showDropdown ? cls.header_drop__overlay : ''} />
        <div
          className={showDropdown ? cls.header_drop__active : cls.header_drop}
        >
          <div className={cls.header_drop__top}>
            {user.image ? (
              <img src={user.image} className={cls.header_drop__pfp} alt="" />
            ) : (
              <div className={cls.header_drop__pfp}>{fullName[0]}</div>
            )}
            <div className={cls.header_drop__name}>{fullName}</div>
          </div>
          <div className={cls.header_drop__nav}>
            <Link to="/my-courses" className={cls.header_drop__link}>
              Mening kurslarim
              <img src={bookIcon} width={20} height={20} alt="" />
            </Link>
            <Link to="/my-courses" className={cls.header_drop__link}>
              To'lov
              <img src={paymentIcon} width={20} height={20} alt="" />
            </Link>
            <Link to="/my-courses" className={cls.header_drop__link}>
              Profilim
              <img src={userIcon} width={22} height={22} alt="" />
            </Link>
            <Link to="/contact-us" className={cls.header_drop__link}>
              A'loqa
              <img src={phoneIcon} width={20} height={20} alt="" />
            </Link>
            <Link
              to="/"
              className={cls.header_drop__link}
              onClick={user.logout}
            >
              Chiqish
              <img src={logoutIcon} width={20} height={20} alt="" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
  return (
    <Link className={cls.login} to="/login">
      <span>Kirish</span>
      <img src={arrow} alt="User" width={20} height={20} />
    </Link>
  );
};
