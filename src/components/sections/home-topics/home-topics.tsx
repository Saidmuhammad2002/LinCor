import { TopicCard } from './topic-card';
import topicData from './topic.data';
import './_home-topics.scss';

export const HomeTopics: React.FC = () => {
  return (
    <section className="topics">
      <div className="topics-wrapper">
        <h2 className="topics__heading">Topik darsliklar</h2>
        <p className="topics__text">
          Bu darsliklari sizning yuqori daraja olishingizga yordam beradi
        </p>

        <div className="topics__cards">
          {topicData.map((topic, index) => (
            <TopicCard key={index} topic={topic} />
          ))}
        </div>
      </div>
    </section>
  );
};
