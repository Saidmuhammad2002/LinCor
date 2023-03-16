import { CoursesCard } from "./courses-card";
import "./_courses.scss";

export const Courses: React.FC = () => {
  return (
    <section className="courses">
      <div className="container">
        <h2 className="courses__heading">Kurslar</h2>
        <p className="courses__text">
          Bu darsliklari sizning yuqori daraja olishingizga yordam beradi
        </p>
        <div className="courses-wrapper">
          <CoursesCard />
          <CoursesCard />
          <CoursesCard />
        </div>
      </div>
    </section>
  );
};
