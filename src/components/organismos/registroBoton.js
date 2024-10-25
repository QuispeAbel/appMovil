import React, { useState, useEffect } from "react";
import { ActionButton } from "../moleculas/accionDeBoton";

export const RegistroButton = ({ CrearCuetna }) => {
  return (
    <ActionButton
      style={{ borderColor: "#777777" }}
      onPress={CrearCuetna}
      title={"Registrarse"}
      registro={true}
    />
  );
};
