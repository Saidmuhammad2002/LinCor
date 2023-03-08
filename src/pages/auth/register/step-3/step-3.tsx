import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const RegisterStep3: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", surname: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const body = formData;
    console.log(body);
    navigate("/profile");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="login">
      <h3 className="login__logo">LinCor</h3>
      <h2 className="login__heading">Profil</h2>
      <span className="login__advice">Ma'lumotingizni kiriting</span>
      <form className="login__form" onSubmit={handleSubmit}>
        <label className="login__label">
          Ismingiz
          <input
            type="text"
            className="login__controls"
            onChange={handleChange}
            name="name"
            required
          />
        </label>
        <label className="login__label">
          Familiyangiz
          <input
            type="text"
            className="login__controls"
            onChange={handleChange}
            name="surname"
            required
          />
        </label>

        <button
          className="login__btn"
          type="submit"
          style={{ marginTop: "78px" }}
        >
          Tasdiqlash
        </button>
      </form>
    </div>
  );
};
