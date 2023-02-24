import {
  Hero,
  HomeCourse,
  HomeTopics,
  HomeVideo,
  Line,
  OurCenter,
  Teachers,
} from "../../components";
import "./_home.scss";

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <HomeCourse />
      <Line />
      <HomeVideo />
      <Line />
      <HomeTopics />
      <Line />
      <OurCenter />
      <Line />
      <Teachers />
      <Line />
    </>
  );
};
