import React, { useState, useEffect } from "react";
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

import { LoginButton } from "../components/organismos/loginBoton";
import { RegistroButton } from "../components/organismos/registroBoton";
import TextoIndice from "../components/atomos/textoIndice";
import Fondo from "../components/atomos/fondo";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [attempts, setAttempts] = React.useState(0); // Contador de intentos fallidos
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

  const onSignIn = () => {
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Signed In!");
        const user = userCredential.user;
        console.log(user);
        navigation.navigate("Index");
      })
      .catch((error) => {
        Alert.alert("Error", "Login fallido. Verifica tus credenciales.");
        throw error; // Permite que el componente LoginButton controle los intentos fallidos
      });
  };

  return (
    <View style={styles.container}>
      <Fondo />
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
              <TextoIndice texto={"E-mail"} />
              <TextInput
                onChangeText={(text) => setEmail(text)}
                style={styles.input}
                placeholder="example@gmial.com"
              />
            </View>
            <View>
              <TextoIndice texto={"E-mail"} />
              <TextInput
                onChangeText={(text) => setPassword(text)}
                style={styles.input}
                placeholder="contraseña"
                secureTextEntry={true}
              />
            </View>
            <LoginButton
              onSignIn={onSignIn}
              attempts={attempts}
              setAttempts={setAttempts}
            />
            <RegistroButton onPress={handleCreateAccount} />
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
});
