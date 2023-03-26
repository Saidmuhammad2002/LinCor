import { useValidateEmailMutation } from '@app/auth/authApiSlice';
import cls from '@pages/auth/login/login.module.scss';
import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';
import { z } from 'zod';

export const RegisterStep2: React.FC = () => {
  const navigate = useNavigate();
  const [validateEmail, { isLoading }] = useValidateEmailMutation();
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData) as z.infer<typeof formSchema>;
    try {
      await formSchema.parseAsync(data);
      await validateEmail(data.key).unwrap();
      navigate('/register/step-3');
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
        <h2 className={cls.login__heading}>Tasdiqlash</h2>
        <span className={cls.login__advice}>
          Emailingizga yuborilgan maxfiy kodni kiriting.
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
  key: z.string().min(3, 'Key is too short'),
});
