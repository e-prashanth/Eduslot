import React, { useState } from "react";
// import { API_URL_USER } from "react-native-dotenv";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import { API_URL_USER, USER_ID, setUserId } from "../config";

export default function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    // if (!username || !password) {
    //   Alert.alert("All Fields are Required", "Enter Both Email and Password");
    //   setPassword("");
    //   setUsername("");
    //   return;
    // }
    // try {
    //   console.log(`${API_URL_USER}/user-login`);
    //   const response = await fetch(`${API_URL_USER}/user-login`, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ username, password }),
    //   });

    //   if (response.ok) {
    //     const data = await response.json();
    //     const { roleID } = data;

    //     console.log("Role ID:", roleID);

    //     // Navigate to the next screen
    //     if (roleID == 1)
    //       navigation.navigate("AdminRoutes", { userType: "user" });
    //     else if (roleID == 2) {
    //       navigation.navigate("UserRoutes", { userType: "user" });
    //     }
    //   } else {
    //     Alert.alert("Login Failed", "Incorrect email or password");
    //     setPassword("");
    //     setUsername("");
    //     // console.error("Login failed:", response.status, response.statusText);
    //   }
    // } catch (error) {
    //   // Handle network error
    //   console.error("Error:", error);
    // }
    setUserId('660e74ac7433d6f3673525d5');
    // setToken('');
    navigation.navigate("UserRoutes", { userType: "user" }); 
  };

  return (
    <>
      <View style={styles.Logocontainer}>
        <Image
          source={require("../assets/LogoWhite.png")} // Path to your logo image
          style={styles.logo}
        />
      </View>
      <View style={styles.container}>
        <View style={styles.MainContainer}>
          <Text style={styles.title}>Login</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter Your Username"
              value={username}
              onChangeText={setUsername}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter Your Password"
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <StatusBar style="auto" />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    height: "70%",
    width: "90%",
    backgroundColor: "rgba(255,250,250, 0.4)",
    // flex: 1,
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 30,
    alignItems: "center",
  },
  Logocontainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 150,
    marginTop: 30,
    backgroundColor: "#061228",
  },
  logo: {
    width: 200, // Adjust width as needed
    height: 70, // Adjust height as needed
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    backgroundColor: "#061228",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 30,
    color: "white",
  },
  inputContainer: {
    marginBottom: 20,
    width: "80%",
  },
  input: {
    borderWidth: 1,
    backgroundColor: "#fff",
    borderColor: "#fff",
    padding: 10,
    color: "#061228",
    marginBottom: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 35,
    borderRadius: 5,
  },
  buttonText: {
    color: "#061228",
    fontSize: 15,
    fontWeight: "bold",
  },
});
