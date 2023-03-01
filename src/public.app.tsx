import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./components/layouts";
import { Home, Login } from "./pages";

export const Public: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />
      <Route path="/auth/login" element={<Login />} />
    </Routes>
  );
};
