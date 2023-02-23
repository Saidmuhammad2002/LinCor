import { Link } from "react-router-dom";
import playerIcon from "../../../../assets/img/hero-player.svg";
import "./_topic-card.scss";

interface props {
  topic: {
    url: string;
    title: string;
    description: string;
    videoCount: number;
    imgLink: string;
    linkColor: string;
  };
}

export const TopicCard: React.FC<props> = ({ topic }) => {
  return (
    <Link to={topic.url} className="topic-card">
      <div className="topic-card__top">
        <h3 className="topic-card__heading">{topic.title}</h3>
        <p className="topic-card__text">{topic.description}</p>
        <div className="topic-card__video">
          <img width="44" height="44" src={playerIcon} alt="" />
          {topic.videoCount} Video
        </div>
      </div>

      <div className="topic-card__bottom">
        <span className="topic-card__start" style={{ color: topic.linkColor }}>
          Boshladik
        </span>
        <img src={topic.imgLink} alt="" />
      </div>
    </Link>
  );
};
