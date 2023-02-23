import { Hero, HomeCourse, HomeVideo, Line } from "../../components";
import "./_home.scss";

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <HomeCourse />
      <Line />
      <HomeVideo />
      <Line />
    </>
  );
};
