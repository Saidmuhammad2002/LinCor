import { useResetPasswordMutation } from '@app/auth/authApiSlice';
import cls from '@pages/auth/login/login.module.scss';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { z } from 'zod';

export const PasswordReset: React.FC = () => {
  const navigate = useNavigate();
  const [reset, { isLoading }] = useResetPasswordMutation();
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    try {
      await formSchema.parseAsync(data);
      await reset(data).unwrap();
      navigate('/login');
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
        <h2 className={cls.login__heading}>Parolni tiklash</h2>
        <span className={cls.login__advice}>
          Yangi parolni tiklang va doimgidek saytimizdan foydalaning
        </span>

        <form className={cls.login__form} method="post" onSubmit={handleSubmit}>
          <label className={cls.login__label}>
            Kodni kiriting
            <input
              className={cls.login__controls}
              name="key"
              type="number"
              pattern="[0-9]*"
              required
            />
          </label>
          <label className={cls.login__label}>
            Yangi parol
            <input
              className={cls.login__controls}
              name="password"
              type="password"
              required
            />
          </label>
          <label className={`${cls.login__label} ${cls.register__label}`}>
            Yangi parolni takrorlang
            <input
              className={cls.login__controls}
              name="newPassword"
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
    key: z.string().min(3, 'Key is too short'),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(8, 'Password must be at least 8 characters long'),
    newPassword: z.string().min(1, 'Password confirmation is required'),
  })
  .refine((data) => data.password === data.newPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match',
  });
