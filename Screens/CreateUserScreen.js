import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faImagePortrait } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./Navbar";

const CreateUser = () => {
  const [imageUri, setImageUri] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [Password,setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [mobileNoError, setMobileNoError] = useState("");
  const [PasswordError,setPasswordError] = useState("");

  useEffect(() => {
    (async () => {
      // Request permissions for accessing camera and gallery
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Permission Required",
          "Please grant permission to access the media library"
        );
      }
    })();
  }, []);

  const handleImagePicker = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!result.canceled) {
        // Access the URI from the first asset in the array
        const uri = result.assets[0].uri;
        setImageUri(uri);
      }
    } catch (error) {
      console.error("Error picking image:", error);
    }
  };

  const handleSaveChanges = () => {
    // Validation logic here

    // Example validation:
    if (!name.trim()) {
      setNameError("Please enter Name");
      return;
    }

    if (!email.trim()) {
      setEmailError("Please enter Email");
      return;
    }

    if (!mobileNo.trim()) {
      setMobileNoError("Please enter Mobile Number");
      return;
    }

    if (!Password.trim()) {
      setPasswordError("Please enter Password");
      return;
    }

    // Save changes logic here

    // Log the details
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Mobile No:", mobileNo);
    console.log("Password :",Password);
    console.log("Image URI:", imageUri);

    Alert.alert("Success", "Profile details has been updated successfully!");
  };

  return (
    <>
    <Navbar/>
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
        Create User
      </Text>

      <TouchableOpacity onPress={handleImagePicker}>
        {imageUri ? (
          <Image
            source={{ uri: imageUri }}
            style={{ width: 150, height: 150, borderRadius: 100 }}
          />
        ) : (
          <FontAwesomeIcon icon={faImagePortrait} size={150} color="#061228" />
        )}
      </TouchableOpacity>

      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "#061228",
          padding: 10,
          marginVertical: 10,
          width: 300,
        }}
        placeholder="Enter name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      {nameError ? <Text style={{ color: "red" }}>{nameError}</Text> : null}

      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "#061228",
          padding: 10,
          marginVertical: 10,
          width: 300,
        }}
        placeholder="Enter email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      {emailError ? <Text style={{ color: "red" }}>{emailError}</Text> : null}

      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "#061228",
          padding: 10,
          marginVertical: 10,
          width: 300,
        }}
        placeholder="Enter Mobile No"
        value={mobileNo}
        onChangeText={(text) => setMobileNo(text)}
      />
      {mobileNoError ? (
        <Text style={{ color: "red" }}>{mobileNoError}</Text>
      ) : null}

      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "#061228",
          padding: 10,
          marginVertical: 10,
          width: 300,
        }}
        placeholder="Enter Password"
        value={Password}
        onChangeText={(text) => setPassword(text)}
      />
      {mobileNoError ? (
        <Text style={{ color: "red" }}>{mobileNoError}</Text>
      ) : null}

      <TouchableOpacity
        style={{
          backgroundColor: "#061228",
          padding: 10,
          marginVertical: 20,
          width: 200,
          alignItems: "center",
        }}
        onPress={handleSaveChanges}
      >
        <Text style={{ color: "#fff", fontSize: 18 }}>Save</Text>
      </TouchableOpacity>
    </View>
    </>
  );
};

export default CreateUser;
