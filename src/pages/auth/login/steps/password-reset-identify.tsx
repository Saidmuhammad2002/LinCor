import { useResetPasswordVerificationMutation } from '@app/auth/authApiSlice';
import cls from '@pages/auth/login/login.module.scss';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { z } from 'zod';

export const PasswordResetIdentify: React.FC = () => {
  const navigate = useNavigate();
  const [verifyEmail, { isLoading }] = useResetPasswordVerificationMutation();
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData) as z.infer<typeof formSchema>;
    try {
      await formSchema.parseAsync(data);
      await verifyEmail(data).unwrap();
      navigate('/login/password-reset');
    } catch (err) {
      toast.error(
        err instanceof z.ZodError
          ? err.errors[0].message
          : 'An error occurred while processing your request. Your key may be invalid. Please try again later.'
      );
    }
  };

  return (
    <div className={cls.login__wrapper}>
      <div className={cls.login}>
        <h3 className={cls.login__logo}>LinCor</h3>
        <h2 className={cls.login__heading}>Parolni kitirish</h2>
        <span className={cls.login__advice}>
          Parolni unutgan bo’lsangiz emailingiz orqali tiklashingiz mumkun
        </span>
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
});
