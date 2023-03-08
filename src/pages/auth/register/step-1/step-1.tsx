import React, { useState } from "react";
import { Link } from "react-router-dom";

interface props {
  setStep: () => void;
  setPhone: (phone: string) => void;
}

interface formValues {
  phone: string;
  password: string;
  repeatPassword: string;
}

export const RegisterStep1: React.FC<props> = ({ setStep, setPhone }) => {
  const [formData, setFormData] = useState<formValues>({
    phone: "",
    password: "",
    repeatPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (formData.password !== formData.repeatPassword) {
      return alert("Parollar bir xil bo'lishi shart!");
    }

    const body = formData;

    console.log(body);
    setPhone(formData.phone);
    sessionStorage.setItem("phone", formData.phone);
    setStep();
  };

  return (
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
            onChange={handleChange}
            name="phone"
            type="tel"
            required
          />
        </label>
        <label className="login__label">
          Parol
          <input
            className="login__controls"
            onChange={handleChange}
            name="password"
            type="password"
            required
          />
        </label>
        <label className="login__label register__label">
          Parolni takrorlang
          <input
            className="login__controls"
            onChange={handleChange}
            name="repeatPassword"
            type="password"
            required
          />
        </label>

        <button className="login__btn register__btn" type="submit">
          Tasdiqlash
        </button>
      </form>
    </div>
  );
};
