import { selectCurrentStep } from '@/app/auth/authSlice';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export const RequireStepValidation: React.FC<{ path: string }> = ({ path }) => {
  let location = useLocation();
  let validatedStep = useSelector(selectCurrentStep);
  const currentStep = location.pathname.split('-').pop() || 1;

  const content =
    validatedStep >= +currentStep ? (
      <Outlet />
    ) : (
      <Navigate
        to={`/${path}/step-${validatedStep}`}
        state={{ from: location }}
        replace
      />
    );

  return content;
};
