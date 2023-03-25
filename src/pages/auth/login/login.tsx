import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Login: React.FC = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  // const [maskedValue, setMaskedValue] = useState("");

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setPassword(e.target.value);
    // setMaskedValue(e.target.value.replace(/./g, "*"));
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const body = {
      phone_number: phone,
      password,
    };

    console.log(body);
    navigate('/');
  };

  return (
    <div className="login">
      <h3 className="login__logo">LinCor</h3>
      <h2 className="login__heading">Kirish</h2>
      <span className="login__advice">Bizga qo’shiling!</span>
      <Link to="/auth/register" className="login__link">
        Ro’yxatdan o’tish
      </Link>
      <form className="login__form" onSubmit={handleSubmit}>
        <label className="login__label">
          Telefon raqamingiz{' '}
          <input
            className="login__controls"
            onChange={(e) => setPhone(e.target.value)}
            type="text"
            required
          />
        </label>
        <label className="login__label">
          Parol{' '}
          <input
            className="login__controls login__password"
            type="password"
            value={password}
            onChange={handleInputChange}
            minLength={8}
            required
          />
        </label>
        <Link className="login__reset" to="/">
          Parolni unutdingizmi?
        </Link>
        <button className="login__btn" type="submit">
          Kirish
        </button>
      </form>
    </div>
  );
};
