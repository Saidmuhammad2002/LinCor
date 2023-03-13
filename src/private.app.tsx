import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./components/layouts";
import { ContactUs, Home, NotFound } from "./pages";

export const Private: React.FC = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MainLayout>
  );
};
