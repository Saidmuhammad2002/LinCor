import { Footer } from './footer';
import { Header } from './header';
import { Outlet } from 'react-router-dom';
import cls from './main_layout.module.scss';

export const MainLayout: React.FC = () => {
  return (
    <div className={cls.container}>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
