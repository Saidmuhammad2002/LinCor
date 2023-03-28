import { Link, NavLink } from 'react-router-dom';

import burger from '@assets/img/burger.svg';
import { useState } from 'react';
import { HeaderDropdown } from './header-dropdown';
import cls from './header.module.scss';

export const Header: React.FC = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <header className={cls.header}>
      <div className={cls.wrapper}>
        <Link className={cls.logo} to="/">
          LinCor
        </Link>

        <nav className={`${cls.nav} ${click ? cls.mobile : ''}`}>
          <div className={cls.mobile__close} onClick={handleClick}>
            &times;
          </div>
          <NavLink className={cls.nav__link} to="/courses">
            Kurslar
          </NavLink>
          <NavLink className={cls.nav__link} to="/topics">
            Topik
          </NavLink>
          <NavLink className={cls.nav__link} to="/studying">
            Koreada o‘qish
          </NavLink>
          <NavLink className={cls.nav__link} to="/payment">
            To’lov
          </NavLink>
          <NavLink className={cls.nav__link} to="/contacts">
            Aloqa
          </NavLink>
        </nav>

        <div className={cls.btns}>
          <img src={burger} className={cls.burger} onClick={handleClick} />
          <HeaderDropdown />
        </div>
      </div>
    </header>
  );
};
