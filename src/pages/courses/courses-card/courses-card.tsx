import { Link } from 'react-router-dom';
import coursesPlay from '../../../assets/img/courses-play.svg';
import './_courses-card.scss';

interface props {
  course?: {
    title: string;
    description: string;
    videoCount: number;
    price: string;
  };
}

export const CoursesCard: React.FC<props> = ({}) => {
  return (
    <div className="courses-card">
      <h3 className="courses-card__heading">Boshlang‘ich daraja</h3>
      <p className="courses-card__description">
        siz yigirma beshtadan darslarni olasiz yigirma beshtadan ortiq darslarni
        olasiz
      </p>
      <div className="courses-card__center">
        <span className="courses-card__video-count">24 Video</span>
        <img src={coursesPlay} width={40} height={40} decoding="sync" alt="" />
      </div>
      <h4 className="courses-card__price">320 000 so’m</h4>
      <Link className="courses-card__link" to="/">
        Sotib olish
      </Link>
    </div>
  );
};
