import { StyleSheet, Image } from "react-native";

export default function Fondo() {
  return (
    <Image
      source={require("../../../assets/images/fondo.jpg")}
      style={[styles.fondo, StyleSheet.absoluteFill]}
    />
  );
}

const styles = StyleSheet.create({
  fondo: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },
});
