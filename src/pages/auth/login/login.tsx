import { useState } from "react";
import { Link } from "react-router-dom";
import "./_login.scss";

export const Login: React.FC = () => {
  const [password, setPassword] = useState("");
  const [maskedValue, setMaskedValue] = useState("");

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setPassword(e.target.value);
    setMaskedValue(e.target.value.replace(/./g, "*"));
  };

  return (
    <div className="login">
      <h3 className="login__logo">LinCor</h3>
      <h2 className="login__heading">Kirish</h2>
      <span className="login__advice">Bizga qo'shiling!</span>
      <Link to="/auth/register" className="login__link">
        Ro’yxatdan o’tish
      </Link>
      <form className="login__form">
        <label className="login__label">
          Telefon raqamingiz <input className="login__controls" type="text" />
        </label>
        <label className="login__label">
          Parol{" "}
          <input
            className="login__controls login__password"
            type="text"
            value={maskedValue}
            onChange={handleInputChange}
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
