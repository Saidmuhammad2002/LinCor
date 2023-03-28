import { useCreateProfileMutation } from '@app/auth/authApiSlice';
import cls from '@pages/auth/login/login.module.scss';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { z } from 'zod';

export const RegisterStep3: React.FC = () => {
  const navigate = useNavigate();
  const [create, { isLoading, error }] = useCreateProfileMutation();
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    try {
      await formSchema.parseAsync(data);
      await create(data).unwrap();
      navigate('/');
    } catch (err) {
      toast.error(
        err instanceof z.ZodError
          ? err.errors.map((error) => error.message).join('.\n')
          : 'An error occurred while processing your request. Please try again later.'
      );
    }
  };

  return (
    <div className={cls.login__wrapper}>
      <div className={cls.login}>
        <h3 className={cls.login__logo}>LinCor</h3>
        <h2 className={cls.login__heading}>Profil</h2>
        <span className={cls.login__advice}>Ma'lumotingizni kiriting</span>

        <form className={cls.login__form} method="post" onSubmit={handleSubmit}>
          <label className={cls.login__label}>
            Ismingiz
            <input
              className={cls.login__controls}
              name="first_name"
              type="text"
              required
            />
          </label>
          <label className={cls.login__label}>
            Familiyangiz
            <input
              className={cls.login__controls}
              name="last_name"
              type="text"
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

const formSchema = z.object({
  first_name: z.string().min(2).max(50),
  last_name: z.string().min(2).max(50),
});
