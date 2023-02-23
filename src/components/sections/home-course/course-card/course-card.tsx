import { Link } from "react-router-dom";
import "./_course-card.scss";

interface props {
  course: {
    title: string;
    description: string;
    link: string;
    imgLink: string;
    linkColor: string;
  };
}

export const CourseCard: React.FC<props> = ({ course }) => {
  console.log(course.imgLink);
  return (
    <div className="home-card">
      <h3 className="home-card__heading">{course.title}</h3>
      <p className="home-card__text">{course.description}</p>
      <Link
        className="home-card__link"
        to={course.link}
        style={{ color: course.linkColor }}
      >
        Boshladik
        <img src={course.imgLink} alt="" />
      </Link>
    </div>
  );
};
