import { HomeCourseCard } from './home-course-card';
import courseData from './course.data';
import './_home-course.scss';

export const HomeCourse: React.FC = () => {
  return (
    <section className="home-course">
      <div className="home-course__top">
        <h2 className="home-course__heading">Course</h2>
        <p className="home-course__text">
          Bu darsliklari sizning yuqori daraja olishingizga yordam beradi
        </p>
      </div>

      <div className="home-course__cards">
        {courseData.map((course, index) => (
          <HomeCourseCard key={index} course={course} />
        ))}
      </div>
    </section>
  );
};
