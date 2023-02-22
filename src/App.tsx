import { Route, Routes } from "react-router";
import { MainLayout } from "./components/layouts";
import { Home } from "./pages";

export const App: React.FC = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </MainLayout>
  );
};
