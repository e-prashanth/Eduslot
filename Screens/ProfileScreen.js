import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
  Image
} from "react-native";
import Navbar from "./Navbar";
import { useState } from "react";
import { useEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { API_URL_USER, USER_ID } from "../config";
// import { useNavigation } from "@react-navigation/native";
export default function Profile({ navigation }) {
  // const navigation = useNavigation();
  const [name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [NewPassword, setNewPassword] = useState("");
  const [Password, setPassword] = useState("sample password");
  const [editableEmail, setEditableEmail] = useState(false);
  const [editableName, setEditableName] = useState(false);
  const [editablePassword, setEditablePassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [changesMade, setChangesMade] = useState(false);
  const [ShowNewPassword, setShowNewPassword] = useState(false);
  const [imageUri,setimageUri] = useState("../assets/profilePic.jpeg");
  useEffect(() => {
    fetchDataFromServer();
  }, []);

  const fetchDataFromServer = async () => {
    try {
      // Make API call to fetch user data
      const response = await fetch(
        `${API_URL_USER}/get-user-details?userId=${USER_ID}`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      setName(data["user"].name);
      setEmail(data["user"].email);
      console.log(data); // Update state with fetched user data
      console.log(name);
      console.log(Email);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error
      Alert.alert(
        "Error",
        "Failed to fetch user data. Please try again later."
      );
      navigation.goBack();
    }
  };
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleChangePassword = () => {
    setShowNewPassword(true);
  };
  const handleSaveChanges = () => {
    if (NewPassword != "") {
      Alert.alert(
        "Successful Saved",
        "the changes that are made are successfully Saved"
      );
      navigation.goBack();
    } else {
      Alert.alert("Password Can't be empty", "Password cannot be empty");
    }
  };
  return (
    <>
      <Navbar />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.mainHeading}>User Profile</Text>
          <View style={styles.inputContainer}>
          <Image
            source={require("../assets/profilePic.jpeg")}
            style={{ width: 150, height: 150, borderRadius: 100}}
          />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.heading}>Name</Text>
            <TextInput
              style={styles.input}
              value={name}
              // onChangeText={setnameOfDepartment}
              // placeholder="Prashanth Kumar Ede"
              editable={editableName}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.heading}>Email</Text>
            <TextInput
              style={styles.input}
              value={Email}
              // onChangeText={setnameOfDepartment}
              // placeholder="edeprashanth@gmail.com"
              editable={editableEmail}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.heading}>Password</Text>
            <TextInput
              style={[styles.input, styles.inputPass]}
              value={Password}
              onChangeText={setPassword}
              secureTextEntry={true}
              placeholder="edeprashanth@gmail.com"
              editable={editablePassword}
            />
          </View>
          {ShowNewPassword && (
            <View style={styles.inputContainer}>
              <Text style={styles.heading}>New Password</Text>
              <TextInput
                style={[styles.input]}
                value={NewPassword}
                onChangeText={setNewPassword}
                secureTextEntry={!showPassword}
                placeholder="Enter the New Password"
              />
              <TouchableOpacity
                onPress={toggleShowPassword}
                style={styles.iconWrapper}
              >
                <MaterialIcons
                  name={showPassword ? "visibility-off" : "visibility"}
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
            </View>
          )}
          {!ShowNewPassword &&(<TouchableOpacity
            style={{
              backgroundColor: "#061228",
              padding: 10,
              marginVertical: 20,
              width: 200,
              borderRadius: 10,
              alignItems: "center",
              alignSelf: "center",
            }}
            onPress={handleChangePassword}
          >
            <Text style={{ color: "#fff", fontSize: 18 }}>Change Password</Text>
          </TouchableOpacity>)}
          {ShowNewPassword && (
            <TouchableOpacity
              style={{
                backgroundColor: "#061228",
                padding: 10,
                marginVertical: 15,
                width: 150,
                borderRadius: 10,
                alignItems: "center",
                alignSelf: "center",
              }}
              onPress={handleSaveChanges}
            >
              <Text style={{ color: "#fff", fontSize: 18 }}>Save Changes</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  inputContainer: {
    marginBottom: 25,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  heading: {
    fontSize: 15,
    marginBottom: 5,
  },
  mainHeading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginLeft: 10,
    width: 250,
    color:'black'
  },
  inputPass: {
    // width:230,
    marginLeft: 5,
    marginRight: 20,
  },
  iconWrapper: {
    position: "absolute",
    right: 8, // Adjust the position according to your preference
  },
});
