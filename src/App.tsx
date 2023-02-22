import { Route, Routes } from "react-router";
import { Home } from "./pages";

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
