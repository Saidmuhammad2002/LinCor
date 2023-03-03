import { useEffect, useState } from "react";
import "./_verify.scss";

export const Verify = () => {
  const [timer, setTimer] = useState<number>(60);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="login">
      <h3 className="login__logo">LinCor</h3>
      <h2 className="login__heading">Tasdiqlash</h2>
      <p className="login__advice">
        Shu raqamga yuborilgan maxfiy kodni kiriting.
      </p>

      <form className="login__form">
        <label className="login__label">
          Kodni kiriting
          <input type="text" className="login__controls" maxLength={5} />
          <button>Kodni qayta yuborish</button>
          {timer}
        </label>
      </form>
    </div>
  );
};
