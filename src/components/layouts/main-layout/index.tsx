import { Outlet } from 'react-router-dom';
import { Footer } from './footer';
import { Header } from './header';
import cls from './main_layout.module.scss';

export const MainLayout: React.FC = () => {
  return (
    <div className={cls.main}>
      <Header />
      <main className={cls.container}>
        <Outlet />
        <Footer />
      </main>
    </div>
  );
};
