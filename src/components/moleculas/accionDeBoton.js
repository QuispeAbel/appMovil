// src/components/molecules/ActionButton.jsx
import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { TextoBoton } from "../atomos/textoBoton";

export const ActionButton = ({ onPress, title, disabled, style, registro }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.button, style, disabled && styles.disabled]}
    disabled={disabled}
  >
    <TextoBoton
      style={disabled || registro ? styles.disabledText : styles.text}
    >
      {title}
    </TextoBoton>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    width: 250,
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#D20103",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  disabled: {
    backgroundColor: "#ddd",
    borderColor: "#bbb",
  },
  text: {
    color: "#D20103",
  },
  disabledText: {
    color: "#777777",
  },
});
