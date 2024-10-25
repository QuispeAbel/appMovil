// src/components/atoms/TextAtom.jsx
import React from "react";
import { Text, StyleSheet } from "react-native";

export const TextoBoton = ({ children, style }) => (
  <Text style={[styles.text, style]}>{children}</Text>
);

const styles = StyleSheet.create({
  text: { fontSize: 20, color: "#D20103" },
});
