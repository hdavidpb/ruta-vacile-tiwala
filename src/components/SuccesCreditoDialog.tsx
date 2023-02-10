import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export const SuccesCreditoDialog = () => {
  const { answers } = useSelector((store: RootState) => store.formReducer);
  return (
    <>
      <BsFillCheckCircleFill size={90} color="#FFFFFF" />
      <div className="success-credit">
        <h1>¡Felicidades!</h1>
        <h1>{answers["name"]}</h1>
      </div>
      <p>Hemos recibido tu información , gracias por registrarte.</p>
      <p>Pronto obtendras nuevos beneficios</p>
    </>
  );
};
