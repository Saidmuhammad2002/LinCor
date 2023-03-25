import { useSignupWithEmailIdMutation } from '@app/auth/authApiSlice';
import cls from '@pages/auth/login/login.module.scss';
import { Form, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { z } from 'zod';

export const RegisterStep2: React.FC = () => {
  const navigate = useNavigate();
  const [signup] = useSignupWithEmailIdMutation();
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    try {
      await formSchema.parseAsync(data);
      await signup(data.key);
      navigate('/register/step-3');
    } catch (err) {
      toast.error(
        err instanceof z.ZodError
          ? err.errors[0].message
          : 'An error occurred while processing your request. Please try again later.'
      );
    }
  };
  const handleRetry = (e: React.SyntheticEvent) => {
    e.preventDefault();
    // todo retry and should discassud with backend developer
  };

  return (
    <div className={cls.login__wrapper}>
      <div className={cls.login}>
        <h3 className={cls.login__logo}>LinCor</h3>
        <h2 className={cls.login__heading}>Tasdiqlash</h2>
        <span className={cls.login__advice}>
          Emailingizga yuborilgan maxfiy kodni kiriting.
        </span>
        <Form className={cls.login__form} method="post" onSubmit={handleSubmit}>
          <label className={cls.login__label}>
            Kodni kiriting
            <input
              className={cls.login__controls}
              name="key"
              type="number"
              pattern="[0-9]*"
              required
            />
            <span id="none" className={cls.login__retry} onClick={handleRetry}>
              {/* todo set loading and timer  */}
              Kodni qayta yuborish.
            </span>
          </label>

          <button
            className={`${cls.login__btn} ${cls.register__btn}`}
            type="submit"
          >
            Tasdiqlash
          </button>
        </Form>
      </div>
    </div>
  );
};

const formSchema = z.object({
  key: z.string().min(3, 'Key is too short'),
});
