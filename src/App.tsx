import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./components/layouts";
import { Home } from "./pages";
import { Private } from "./private.app";
import { Public } from "./public.app";

export const App: React.FC = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </MainLayout>
  );
};
