import React, { useEffect, useState } from 'react';

interface props {
  expiryTimestamp: number;
  onTimerComplete: () => void;
  warnAt?: number;
}

export const Timer: React.FC<props> = ({
  expiryTimestamp,
  onTimerComplete,
  warnAt = 10,
}) => {
  const [timeLeft, setTimeLeft] = useState<number>(() => {
    const storedExpiry = localStorage.getItem('expiryTimestamp');
    const parsedExpiry = storedExpiry ? parseInt(storedExpiry, 10) : 0;
    return Math.max(0, Math.floor((parsedExpiry - Date.now()) / 1000));
  });

  //timer logic here
  useEffect(() => {
    if (expiryTimestamp) {
      const storedExpiry = localStorage.getItem('expiryTimestamp');
      const parsedExpiry = storedExpiry ? parseInt(storedExpiry, 10) : 0;

      if (parsedExpiry && parsedExpiry > Date.now()) {
        const intervalId = setInterval(() => {
          const newTimeLeft = Math.max(
            0,
            Math.floor((parsedExpiry - Date.now()) / 1000)
          );

          if (newTimeLeft <= 0) {
            localStorage.removeItem('expiryTimestamp');
            clearInterval(intervalId);
            onTimerComplete();
          } else {
            setTimeLeft(newTimeLeft);
          }
        }, 1000);

        return () => clearInterval(intervalId);
      } else {
        localStorage.removeItem('expiryTimestamp');
      }
    }
  }, [expiryTimestamp, onTimerComplete]);

  //store initial timestamp to storage
  useEffect(() => {
    if (expiryTimestamp) {
      localStorage.setItem('expiryTimestamp', expiryTimestamp.toString());
    }
  }, [expiryTimestamp]);

  const isWarnTime = timeLeft <= warnAt;

  if (timeLeft <= 0) {
    localStorage.removeItem('expiryTimestamp');
  }

  return (
    <span style={{ color: isWarnTime ? 'red' : 'black' }}>
      {Math.floor(timeLeft / 60)
        .toString()
        .padStart(2, '0')}
      :
      {(timeLeft % 60).toString().padStart(2, '0') == '01'
        ? '00'
        : (timeLeft % 60).toString().padStart(2, '0')}
    </span>
  );
};
