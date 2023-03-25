import { Link } from 'react-router-dom';

import userIcon from '../../../../assets/img/header-user.svg';
import { useAuth } from '../../../../utils/hooks';
import { HeaderDropdown } from './header-dropdown';
import cls from './header.module.scss';

export const Header: React.FC = () => {
  const { username } = useAuth();
  return (
    <header className={cls.header}>
      <div className={cls.header__wrapper}>
        <div className={cls.header__left}>
          <Link className={cls.header__logo} to="/">
            LinCor
          </Link>

          <nav className={cls.header__nav}>
            <Link className={cls.header__nav__link} to="/">
              Course
            </Link>
            <Link className={cls.header__nav__link} to="/">
              Topic
            </Link>
            <Link className={cls.header__nav__link} to="/">
              Koreada O‘qish
            </Link>
            <Link className={cls.header__nav__link} to="/">
              To’lov
            </Link>
            <Link className={cls.header__nav__link} to="/">
              Contacts
            </Link>
          </nav>
        </div>

        {username ? (
          <HeaderDropdown />
        ) : (
          <Link className={cls.header__login} to="auth/login">
            Kirish
            <img src={userIcon} alt="User" width={20} height={20} />
          </Link>
        )}
      </div>
    </header>
  );
};
