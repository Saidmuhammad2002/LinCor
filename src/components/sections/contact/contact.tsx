import "./_contact.scss";

export const Contact: React.FC = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-section-wrapper">
          <h2 className="contact-section__heading">Xabar yuboring.</h2>
          <form className="contact-section__form">
            <input
              className="contact-section__input"
              type="text"
              placeholder="Ism"
              required
            />
            <input
              className="contact-section__input"
              type="number"
              placeholder="Telefon nomer"
              required
            />
            <textarea
              className="contact-section__input contact-section__textarea"
              placeholder="Xabar yuboring"
              cols={30}
              rows={8}
              required
            ></textarea>
            <button className="contact-section__btn">Yuborish</button>
          </form>
        </div>
      </div>
    </section>
  );
};
