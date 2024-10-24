import { StyleSheet, Text, View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
export default function Ventas() {
  return (
    <View style={styles.container}>
      <Image
        source={require("/Users/abela/OneDrive/Documentos/Moviles/REACT/Rimoldi-app-blank2/assets/images/fondo.jpg")}
        style={[styles.fondo, StyleSheet.absoluteFill]}
      />
      <Text>Vende aca</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  fondo: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },
});
