import { Link } from 'react-router-dom';
import playIcon from '../../../../assets/img/my-course-play.svg';
import './_my-course-card.scss';

export const MyCourseCard: React.FC<{ expired: boolean }> = ({ expired }) => {
  return (
    <div className="mc-card">
      <div className="mc-card__top">
        <h3 className="mc-card__heading">Boshlang'ich daraja</h3>
      </div>
      <div className="mc-card__bottom">
        <div className="mc-card__bottom__top">
          <img src={playIcon} alt="Play" />
          <h4 className="mc-card__video-count">24 Video</h4>
        </div>
        <div className="mc-card__center">
          <h4 className="mc-card__bought-date">Sotib olingan kun:</h4>
          <span className="mc-card__dates">02.12.2022</span>
        </div>
        <div className="mc-card__end">
          {!expired ? (
            <>
              <h4 className="mc-card__deadline">Tugash vaqti:</h4>
              <span className="mc-card__dates">5 kun qoldi</span>
            </>
          ) : (
            <>
              <h4 className="mc-card__deadline">Tugagan vaqt</h4>
              <span className="mc-card__dates">02.12.2022</span>
            </>
          )}
        </div>
        <Link
          className="mc-card__link"
          to={`${expired ? '/course/buy?courseId' : '/course'}`}
        >
          {expired ? 'Sotib olish' : 'Boshlash'}
        </Link>
      </div>
    </div>
  );
};
