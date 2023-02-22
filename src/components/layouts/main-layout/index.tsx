import { Footer } from "./footer";
import { Header } from "./header";

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </>
  );
};
