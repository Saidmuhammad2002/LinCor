import { Contact, Line } from '../../components';
import tel from '../../assets/img/contact-us-phone.svg';
import location from '../../assets/img/contact-us-location.svg';
import time from '../../assets/img/contact-us-time.svg';
import './_contact-us.scss';

export const ContactUs: React.FC = () => {
  return (
    <>
      <div className="contact-us">
        <h2 className="contact-us__heading">Aloqa</h2>
        <p className="contact-us__text">Bizga murojaat qilmoqchimisiz</p>

        <div className="contact-us__cards">
          <div className="contact-us__card">
            <div className="contact-us__card__top">
              <h3 className="contact-us__card__heading">Aloqa ma’lumoti</h3>
              <img
                className="contact-us__card__img contact-us__card__tel"
                src={tel}
                alt=""
              />
            </div>
            <a className="contact-us__card__link" href="tel:+998990009901">
              tel: +99899 000-99-01
            </a>
            <a
              className="contact-us__card__link"
              href="mailto:examplry@gmail.com"
              style={{ display: 'block', marginTop: '10px' }}
            >
              E-mail: examplry@gmail.com
            </a>
          </div>
          <div className="contact-us__card">
            <div className="contact-us__card__top">
              <h3 className="contact-us__card__heading">Manzil</h3>
              <img
                className="contact-us__card__img contact-us__card__location"
                src={location}
                alt=""
              />
            </div>
            <a
              className="contact-us__card__link"
              href="tel:+998990009901"
              style={{ display: 'block', maxWidth: '309px' }}
            >
              2260 Lady Bug Drive, New York, NY 10011
            </a>
          </div>
          <div className="contact-us__card">
            <div className="contact-us__card__top">
              <h3 className="contact-us__card__heading">Ish vaqti</h3>
              <img
                className="contact-us__card__img contact-us__card__time"
                src={time}
                alt=""
              />
            </div>
            <p className="contact-us__card__text contact-us__card__link">
              Monday - Friday <br /> 10:00 am - 7:30 pm
            </p>
          </div>
        </div>
      </div>
      <Contact />
      <Line />
    </>
  );
};
