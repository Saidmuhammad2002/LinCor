import ourCenterImg from "../../../assets/img/our-center-first.png";
import "./_our-center.scss";

export const OurCenter: React.FC = () => {
  return (
    <section className="our-centre">
      <div className="container">
        <div className="our-center-wrapper">
          <div className="our-center__left">
            <h2 className="our-center__heading">Markazimiz</h2>
            <p className="our-center__text">
              Bu topik darsliklari sizning yuqori daraja olishingizga yordam
              beradi
            </p>
          </div>

          <div className="our-center__right">
            <iframe
              width="420"
              height="264"
              style={{ borderRadius: "12px" }}
              src="https://www.youtube.com/embed/PIS2MZtwtRs"
              title="ᴛʜᴇ ᴀʀᴛ ᴏғ ᴘᴀʀᴋᴏᴜʀ"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <img src={ourCenterImg} width="117" height="264" alt="Our center" />
            <img src={ourCenterImg} width="117" height="264" alt="Our center" />
          </div>
        </div>
      </div>
    </section>
  );
};
