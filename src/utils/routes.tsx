import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '../components/layouts';
import { ContactUs, Home, Login, MyCourses, NotFound } from '../pages';
import {
  RegisterStep1,
  RegisterStep2,
  RegisterStep3,
} from '../pages/auth/register/steps';
import RequireAuth from '../pages/auth/RequireAuth';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      // start of protected routes
      {
        element: <RequireAuth />,
        children: [
          {
            path: 'contact-us',
            element: <ContactUs />,
          },
          {
            path: 'my-courses',
            element: <MyCourses />,
          },
        ],
      },

      // end of protected routes
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
  { path: 'login', element: <Login /> },
  {
    path: 'register',
    children: [
      {
        index: true,
        element: <RegisterStep1 />,
      },
      {
        path: 'step-2',
        element: <RegisterStep2 />,
      },
      {
        path: 'step-3',
        element: <RegisterStep3 />,
      },
    ],
  },
]);
