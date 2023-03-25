import { useSignupMutation } from '@app/auth/authApiSlice';
import cls from '@pages/auth/login/login.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { z } from 'zod';

export const RegisterStep1: React.FC = () => {
  const navigate = useNavigate();
  const [signup, { isLoading }] = useSignupMutation();
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    try {
      await formSchema.parseAsync(data);
      await signup(data);
      navigate('/register/step-2');
    } catch (err) {
      toast.error(
        err instanceof z.ZodError // you can sow first error only using // err.errors[0].message
          ? err.errors.map((error) => error.message).join('.\n')
          : 'An error occurred while processing your request. Please try again later.'
      );
    }
  };

  return (
    <div className={cls.login__wrapper}>
      <div className={cls.login}>
        <h3 className={cls.login__logo}>LinCor</h3>
        <h2 className={cls.login__heading}>Ro’yxatdan o’tish</h2>
        <span className={cls.login__advice}>Bizga qo’shiling!</span>
        <Link className={cls.login__link} to="/auth/login">
          Kirish
        </Link>
        <form className={cls.login__form} method="post" onSubmit={handleSubmit}>
          <label className={cls.login__label}>
            Emailingiz
            <input
              className={cls.login__controls}
              name="email"
              type="email"
              required
            />
          </label>
          <label className={cls.login__label}>
            Parol
            <input
              className={cls.login__controls}
              name="password"
              type="password"
              required
            />
          </label>
          <label className={`${cls.login__label} ${cls.register__label}`}>
            Parolni takrorlang
            <input
              className={cls.login__controls}
              name="confirmPassword"
              type="password"
              required
            />
          </label>

          <button
            className={`${cls.login__btn} ${cls.register__btn}`}
            type="submit"
            disabled={isLoading}
          >
            Tasdiqlash
          </button>
        </form>
      </div>
    </div>
  );
};

const formSchema = z
  .object({
    email: z.string().email('Invalid email').min(1, 'Email is required'),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(8, 'Password must be at least 8 characters long'),
    confirmPassword: z.string().min(1, 'Password confirmation is required'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match',
  });
