import './_tips-card.scss';

interface props {
  tip: {
    author: string;
    tips: string[];
  };
}

export const TipsCard: React.FC<props> = ({ tip }) => {
  return (
    <div className="tips-card">
      <div className="tips-card__top">
        <h3 className="tips-card__heading">{tip.author}</h3>
      </div>
      <ul className="tips-card__list">
        {tip.tips.map((tip, index) => (
          <li className="tips-card__item" key={index}>
            {tip}
          </li>
        ))}
      </ul>
    </div>
  );
};
