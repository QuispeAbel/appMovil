// src/components/organisms/LoginButton.jsx
import React, { useState, useEffect } from "react";
import { ActionButton } from "../moleculas/accionDeBoton";

export const LoginButton = ({ onSignIn, attempts, setAttempts }) => {
  const [isBlocked, setIsBlocked] = useState(false); // Estado de bloqueo
  const [timer, setTimer] = useState(0); // Contador de tiempo para el bloqueo

  useEffect(() => {
    let interval;
    if (isBlocked) {
      interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            setIsBlocked(false);
            setAttempts(0);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isBlocked]);

  const handlePress = () => {
    if (isBlocked) {
      alert(`Espera ${timer} segundos antes de intentar de nuevo`);
    } else {
      onSignIn().catch(() => {
        setAttempts((prev) => {
          if (prev + 1 >= 3) {
            setIsBlocked(true);
            setTimer(30);
          }
          return prev + 1;
        });
      });
    }
  };

  return (
    <ActionButton
      onPress={handlePress}
      title={isBlocked ? `Bloqueado (${timer})` : "Ingresar"}
      disabled={isBlocked}
    />
  );
};
