import { LoginStep1, LoginStep2 } from '@/pages/auth/login';
import { RequireStepValidation } from '@/pages/auth/RequireStepValidation';
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
    element: <RequireStepValidation path="register" />,
    children: [
      {
        path: 'step-1',
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
    element: <RequireStepValidation path="login" />,
    children: [
      {
        path: 'step-1',
        element: <LoginStep1 />,
      },
      {
        path: 'step-2',
        element: <LoginStep2 />,
      },
      {
        path: 'step-3',
        element: <RegisterStep3 />,
      },
    ],
  },
]);
