import { Route, Routes } from "react-router-dom";
import { Home } from "./pages";

export const Public: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
