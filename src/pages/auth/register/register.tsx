import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Verify } from "../verify";
import { RegisterStep1 } from "./step-1";
import { RegisterStep3 } from "./step-3";
import "./_register.scss";

export const Register: React.FC = () => {
  const [phone, setPhone] = useState<string>(
    sessionStorage.getItem("phone") ? sessionStorage.getItem("phone") || "" : ""
  );
  const [showVerification, setShowVerification] = useState<boolean>(
    localStorage.getItem("expiryTimestamp") ? true : false
  );
  const [step, setStep] = useState(1);

  const handlePhone = (phone: string) => {
    setPhone(phone);
  };

  const navigate = useNavigate();

  return (
    <>
      {step === 1 && !showVerification ? (
        <RegisterStep1
          setStep={() => {
            setStep(2);
            setShowVerification(true);
          }}
          setPhone={handlePhone}
        />
      ) : null}
      {step === 2 || showVerification ? (
        <Verify
          phone={phone}
          setStep={() => {
            setStep(3);
            setShowVerification(false);
          }}
        />
      ) : null}
      {step === 3 ? <RegisterStep3 /> : null}
    </>
  );
};
