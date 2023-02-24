import teacher1 from "../../../assets/img/teacher1.png";
import "./_teachers.scss";

export const Teachers: React.FC = () => {
  return (
    <section className="teachers">
      <div className="container">
        <div className="teachers-wrapper">
          <div className="teachers__left">
            <h2 className="teachers__heading">O’qituvchilarni sarasi bizda!</h2>
            <p className="teachers__text">
              Bu topik darsliklari sizning yuqori daraja olishingizga yordam
              beradi
            </p>
          </div>
          <div className="teachers__right">
            <span className="teachers__word">린 코르</span>
            <div className="teachers__card">
              <img src={teacher1} width="220" height="220" alt="" />
            </div>
            <div className="teachers__card">
              <img src={teacher1} width="220" height="220" alt="" />
            </div>
            <div className="teachers__card">
              <img src={teacher1} width="220" height="220" alt="" />
            </div>
            <div className="teachers__card">
              <img src={teacher1} width="220" height="220" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
