import { Link } from 'react-router-dom';
import playerIcon from '../../../assets/img/hero-player.svg';
import cls from './hero.module.scss';

export const Hero: React.FC = () => {
  return (
    <section className={cls.hero}>
      <div className={cls.hero__wrapper}>
        <h1 className={cls.hero__heading}>online Til o‘rgan Koreada o‘qi!</h1>
        <p className={cls.hero__text}>
          bitta siteni o‘zida bilim oling testdan o‘ting koreaga boring!
        </p>
        <Link className={cls.hero__link} to="/videos">
          Birinchi dars
          <img src={playerIcon} alt="" />
        </Link>
      </div>
    </section>
  );
};
