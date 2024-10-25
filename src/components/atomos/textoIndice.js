import { Text, StyleSheet } from "react-native";

export default function TextoIndice({ texto }) {
  return <Text style={styles.texto}>{texto}</Text>;
}

const styles = StyleSheet.create({
  texto: {
    fontSize: 25,
    color: "#777777",
  },
});
