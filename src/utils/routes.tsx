import {
  LoginStep1,
  LoginStep2,
  PasswordReset,
  PasswordResetIdentify,
} from '@/pages/auth/login';
import {
  RegisterStep1,
  RegisterStep2,
  RegisterStep3,
} from '@pages/auth/register';
import { createBrowserRouter } from 'react-router-dom';
import RequireAuth from '../app/auth/RequireAuth';
import { MainLayout } from '../components/layouts';
import { ContactUs, Home, MyCourses, NotFound } from '../pages';

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
  {
    path: 'login',

    children: [
      {
        index: true,
        element: <LoginStep1 />,
      },
      {
        path: 'step-2',
        element: <LoginStep2 />,
      },
      {
        path: 'password-reset',
        element: <PasswordReset />,
      },
      {
        path: 'password-reset-identify',
        element: <PasswordResetIdentify />,
      },
    ],
  },
]);
