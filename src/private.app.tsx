import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./components/layouts";
import { ContactUs, Home, MyCourses, NotFound, Courses } from "./pages";

export const Private: React.FC = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/my-courses" element={<MyCourses />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MainLayout>
  );
};
