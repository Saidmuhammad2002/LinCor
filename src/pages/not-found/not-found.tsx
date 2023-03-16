import { Link } from "react-router-dom";
import "./_not-found.scss";

export const NotFound: React.FC = () => {
  return (
    <div className="container">
      <section className="not-found">
        <div className="not-found-wrapper">
          <h3 className="not-found__heading">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </h3>
          <div className="not-found-wrap">
            <Link className="not-found__links" to="/courses">
              Explore courses
            </Link>
            <Link className="not-found__links" to="/">
              Go home
            </Link>
          </div>
        </div>
        <h2 className="not-found__status">404</h2>
      </section>
    </div>
  );
};
