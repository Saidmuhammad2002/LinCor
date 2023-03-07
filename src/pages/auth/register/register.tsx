import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Verify } from "../verify";
import "./_register.scss";

export const Register = () => {
  const [phone, setPhone] = useState<string>(
    sessionStorage.getItem("phone") ? sessionStorage.getItem("phone") : ""
  );
  const [password, setPassword] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");
  const [showVerification, setShowVerification] = useState<boolean>(
    localStorage.getItem("expiryTimestamp") ? true : false
  );
  const navigate = useNavigate();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (password !== repeatPassword) {
      return alert("Parollar bir xil bo'lishi shart!");
    }

    const body = {
      phone_number: phone,
      password,
      repeatPassword,
    };

    console.log(body);
    setShowVerification(true);
    sessionStorage.setItem("phone", phone);
    // navigate("/auth/verify-phone");
  };

  return (
    <>
      {!showVerification ? (
        <div className="login">
          <h3 className="login__logo">LinCor</h3>
          <h2 className="login__heading">Ro’yxatdan o’tish</h2>
          <span className="login__advice">Bizga qo’shiling!</span>
          <Link className="login__link" to="/auth/login">
            Kirish
          </Link>

          <form className="login__form" onSubmit={handleSubmit}>
            <label className="login__label">
              Telefon raqamingiz
              <input
                className="login__controls"
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                required
              />
            </label>
            <label className="login__label">
              Parol
              <input
                className="login__controls"
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                required
              />
            </label>
            <label className="login__label register__label">
              Parolni takrorlang
              <input
                className="login__controls"
                onChange={(e) => setRepeatPassword(e.target.value)}
                type="password"
                required
              />
            </label>

            <button className="login__btn register__btn" type="submit">
              Tasdiqlash
            </button>
          </form>
        </div>
      ) : (
        <Verify phone={phone} />
      )}
    </>
  );
};
