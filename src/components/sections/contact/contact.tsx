import { useState } from 'react';
import './_contact.scss';

export const Contact: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const body = {
      name,
      phone_number: phone,
      message,
    };
    console.log(body);
    setName('');
    setPhone('');
    setMessage('');
  };
  return (
    <section className="contact-section">
      <div className="contact-section-wrapper">
        <h2 className="contact-section__heading">Xabar yuboring.</h2>
        <form className="contact-section__form" onSubmit={handleSubmit}>
          <input
            className="contact-section__input"
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Ism"
            required
          />
          <input
            className="contact-section__input"
            onChange={(e) => setPhone(e.target.value)}
            type="text"
            placeholder="Telefon nomer"
            required
          />
          <textarea
            className="contact-section__input contact-section__textarea"
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Xabar yuboring"
            cols={30}
            rows={8}
            required
          ></textarea>

          <button className="contact-section__btn" type="submit">
            Yuborish
          </button>
        </form>
      </div>
    </section>
  );
};
