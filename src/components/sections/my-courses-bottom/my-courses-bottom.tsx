import { useState } from "react";
import { MyCourseCard } from "./my-course-card";
import "./_my-courses-bottom.scss";

export const MyCoursesBottom: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"bought" | "expired">("bought");

  return (
    <div className="my-course-bottom mc__bottom">
      <div className="mc__bottom__top">
        <ul className="mc__bottom__list">
          <li className="mc__bottom__item">
            <button
              onClick={() => setActiveTab("bought")}
              className={`mc__bottom__btn ${
                activeTab === "bought" ? "mc__bottom__btn--active" : ""
              }`}
            >
              Sotib olingan kurslar
            </button>
          </li>
          <li className="mc__bottom__item">
            <button
              onClick={() => setActiveTab("expired")}
              className={`mc__bottom__btn ${
                activeTab === "expired" ? "mc__bottom__btn--active" : ""
              }`}
            >
              Avval sotib olingan kurslar
            </button>
          </li>
        </ul>
      </div>
      <div className="mc__bottom__bottom">
        {/* {activeTab === "expired" ? <p>siu</p> : null} */}
        <MyCourseCard expired={activeTab === "expired" ? true : false} />
        <MyCourseCard expired={activeTab === "expired" ? true : false} />
        <MyCourseCard expired={activeTab === "expired" ? true : false} />
        <MyCourseCard expired={activeTab === "expired" ? true : false} />
      </div>
    </div>
  );
};
