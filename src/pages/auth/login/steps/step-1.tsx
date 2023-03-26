import { useLoginMutation } from '@app/auth/authApiSlice';
import cls from '@pages/auth/login/login.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { z } from 'zod';

export const LoginStep1: React.FC = () => {
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    try {
      await formSchema.parseAsync(data);
      await login(data).unwrap();
      navigate('/login/step-2');
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
        <h2 className={cls.login__heading}>Kirish</h2>
        <span className={cls.login__advice}>Bizga qo’shiling!</span>
        <Link className={cls.login__link} to="/register">
          Ro’yxatdan o’tish
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
            <Link
              to="/login/password-reset-identify"
              id="none"
              className={cls.login__retry}
            >
              Parolni unutdingizmi?
            </Link>
          </label>

          <button
            className={`${cls.login__btn} ${cls.register__btn}`}
            type="submit"
            disabled={isLoading}
          >
            Kirish
          </button>
        </form>
      </div>
    </div>
  );
};

const formSchema = z.object({
  email: z.string().email('Invalid email').min(1, 'Email is required'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(8, 'Password must be at least 8 characters long'),
});
