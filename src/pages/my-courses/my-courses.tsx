import { Link } from "react-router-dom";
import { MyCoursesBottom } from "../../components";
import "./_my-courses.scss";

export const MyCourses: React.FC = () => {
  return (
    <main className="main">
      <section className="my-courses">
        <div className="container">
          <h2 className="my-courses__heading">Mening kurslarim</h2>
          <div className="my-courses__content">
            <div className="my-courses__top">
              <div className="my-courses-wrapper">
                <div className="my-courses__top__left">
                  <div className="my-courses__pfp">
                    <span>Sh</span>
                  </div>
                  <div style={{ marginTop: "22px" }}>
                    <h3 className="my-courses__user">Shahboz Aliyev</h3>
                    <span className="my-courses__tel">+99899 000-00-00</span>
                  </div>
                </div>

                <Link className="my-courses__top__link" to="/settings">
                  Profil sozlamalari
                </Link>
              </div>
            </div>
          </div>
          <MyCoursesBottom />
        </div>
      </section>
    </main>
  );
};
