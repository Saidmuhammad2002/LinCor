import { useEffect, useState } from "react";
import { Timer } from "./timer";
import "./_verify.scss";

interface props {
  phone: string;
  setStep: () => void;
}

export const Verify: React.FC<props> = ({ phone, setStep }) => {
  const [verificationCode, setVerificationCode] = useState<string>("");

  //timer logic
  const [expiryTimestamp, setExpiryTimestamp] = useState<number>(
    parseInt(localStorage.getItem("expiryTimestamp") || "0")
      ? parseInt(localStorage.getItem("expiryTimestamp") || "0")
      : Date.now() + 1 * 60 * 1000
  );

  const [timeExpired, setTimeExpired] = useState(false);

  const handleForm = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const code = {
      verificationCode,
    };

    console.log(code);
    localStorage.removeItem("expiryTimestamp");
    setStep();
  };

  const handleResendVerificationCode = () => {
    setVerificationCode("");
    setExpiryTimestamp(Date.now() + 1 * 60 * 1000);
    setTimeExpired(false);
  };
  return (
    <div className="login">
      <h3 className="login__logo">LinCor</h3>
      <h2 className="login__heading">Tasdiqlash</h2>
      <p className="login__advice">
        {phone} ga yuborilgan maxfiy kodni kiriting.
      </p>

      <form className="login__form" onSubmit={handleForm}>
        <label className="login__label">
          Kodni kiriting
          <input
            type="text"
            className="login__controls"
            maxLength={5}
            minLength={5}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setVerificationCode(e.target.value)
            }
            required
          />
          {/* timer */}
          <div className="login__resend-wrapper">
            <button
              className={`login__resend
                ${timeExpired ? "" : "login__resend--disabled"}
              `}
              disabled={timeExpired ? false : true}
              onClick={handleResendVerificationCode}
              type="button"
            >
              Kodni qayta yuborish
            </button>
            {!timeExpired ? (
              <Timer
                expiryTimestamp={expiryTimestamp}
                onTimerComplete={() => setTimeExpired(true)}
              />
            ) : null}
          </div>
        </label>
        <button className="login__btn" type="submit">
          Tasdiqlash
        </button>
      </form>
    </div>
  );
};
