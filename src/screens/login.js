import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { BlurView } from "expo-blur";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../firebase-config";

import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigation = useNavigation();

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("account created!");
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        alert(error);
      });
  };

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Signed In!");
        const user = userCredential.user;
        console.log(user);
        navigation.navigate("Index");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/fondo.jpg")}
        style={[styles.fondo, StyleSheet.absoluteFill]}
      />
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <BlurView intensity={90}>
          <View style={styles.login}>
            <Image
              source={require("../../assets/images/logoRimoldi.jpg")}
              style={styles.logo}
            />
            <View>
              <Text style={styles.texto}>E-mail</Text>
              <TextInput
                onChangeText={(text) => setEmail(text)}
                style={styles.input}
                placeholder="example@gmial.com"
              />
            </View>
            <View>
              <Text style={styles.texto}>Contraseña</Text>
              <TextInput
                onChangeText={(text) => setPassword(text)}
                style={styles.input}
                placeholder="contraseña"
                secureTextEntry={true}
              />
            </View>
            <TouchableOpacity onPress={handleSignIn} style={styles.boton}>
              <Text style={[styles.texto, { fontSize: 20, color: "#D20103" }]}>
                Ingresar
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleCreateAccount}
              style={[
                styles.boton,
                { backgroundColor: "#fff", borderColor: "#777777" },
              ]}
            >
              <Text style={[styles.texto, { fontSize: 20, color: "#777777" }]}>
                Registrarse
              </Text>
            </TouchableOpacity>
          </View>
        </BlurView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  fondo: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },
  login: {
    width: 350,
    height: 500,
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: "#E8E8E8",
    borderWidth: 2,
    marginVertical: 30,
  },
  texto: {
    fontSize: 25,
    color: "#777777",
  },
  input: {
    width: 250,
    height: 40,
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 10,
    marginVertical: 10,
    padding: 10,
    backgroundColor: "#ffffff90",
    marginBottom: 20,
  },
  boton: {
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
});
