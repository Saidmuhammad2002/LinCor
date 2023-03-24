import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import tipsData from './tips.data';
import { TipsCard } from './tips-card';
import arrowIcon from '../../../assets/img/tips-arrow.svg';
import './_tips.scss';
import 'swiper/css';

export const Tips: React.FC = () => {
  return (
    <section className="tips">
      <div className="tips-wrapper">
        <h2 className="tips__heading">Maslahatlar</h2>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{ nextEl: '.tips__next', prevEl: '.tips__prev' }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={8}
          loop={true}
          slidesPerView={3.6}
        >
          {tipsData.map((tip, index) => (
            <SwiperSlide key={index}>
              <TipsCard tip={tip} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="tips__btns">
          <button className="tips__prev">
            <img src={arrowIcon} alt="previous tips" />
          </button>
          <button className="tips__next">
            <img src={arrowIcon} alt="next tips" />
          </button>
        </div>
      </div>
    </section>
  );
};
