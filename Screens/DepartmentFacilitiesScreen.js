import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import Navbar from "./Navbar.js";
import { useNavigation } from "@react-navigation/native";
import {
  API_URL_CLASSES,
  API_URL_DEPARTMENT,
  API_URL_LABS,
} from "../config.js";
const DepartmentFacilitiesScreen = () => {
  const [nameOfDepartment, setnameOfDepartment] = useState("");
  const [numberOfRooms, setnumberOfRooms] = useState(0);
  const [roomNumbers, setroomNumbers] = useState([]);
  const [numberOfLabs, setnumberOfLabs] = useState(0);
  const [labNumbers, setlabNumbers] = useState([]);
  const [yearsInDepartment, setyearsInDepartment] = useState([]);

  const navigation = useNavigation();
  const handleSubmit = async () => {
    if (
      !nameOfDepartment ||
      !numberOfRooms ||
      !numberOfLabs ||
      !roomNumbers ||
      !labNumbers ||
      !yearsInDepartment
    ) {
      // Display an alert if any field is empty
      Alert.alert("All fields are mandatory", "Please fill in all fields");
      return;
    }

    // Split roomNumbers, labNumbers, and yearsInDepartment into arrays
    const roomNumbersArray = roomNumbers.split(",").map((room) => room.trim());
    const labNumbersArray = labNumbers.split(",").map((lab) => lab.trim());
    const yearsInDepartmentArray = yearsInDepartment
      .split(",")
      .map((year) => year.trim());

    try {
      const departmentResponse = await fetch(
        `${API_URL_DEPARTMENT}/add-department`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            departmentName: nameOfDepartment,
            labsCount: numberOfLabs,
            classesCount : numberOfRooms
          }),
        }
      );
      if (!departmentResponse.ok) {
        Alert.alert("Failed", "Failed to create department");
        console.log(departmentResponse)
        throw new Error("Failed to create department");
      }
      const departmentData = await departmentResponse.json();
      const departmentId = departmentData._id;
      console.log("ID:", departmentData);
      await createLabs(departmentId, labNumbersArray);
      await createClasses(departmentId, roomNumbersArray);

      
      Alert.alert("Done!", "Department Facilities Created Successfully");
      // navigation.navigate("AdminDashboard");
    } catch (error) {
      console.error(error);
    }
    navigation.navigate("AdminDashboard");
  };
  const createLabs = async (departmentId, labNumbersArray) => {
    labNumbersArray.forEach(async (i) => {
      try {
        const createLabsResponse = await fetch(`${API_URL_LABS}/add-lab`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            departmentId: departmentId,
            labName: i,
          }),
        });
      } catch (error) {
        console.error(error);
      }
    });
  };

  const createClasses = async (departmentId, roomNumbersArray) => {
    roomNumbersArray.forEach(async (i) => {
      try {
        const createLabsResponse = await fetch(`${API_URL_CLASSES}/add-class`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            departmentId: departmentId,
            classNumber: parseInt(i),
          }),
        });
      } catch (error) {
        console.error(error);
      }
    });
  };

  return (
    <>
      <Navbar />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.mainHeading}>Department Facilities</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.heading}>Enter Name of the Department</Text>
            <TextInput
              style={styles.input}
              value={nameOfDepartment}
              onChangeText={setnameOfDepartment}
              placeholder="Information Technology(IT)"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.heading}>Enter Number of Rooms</Text>
            <TextInput
              style={styles.input}
              value={numberOfRooms}
              onChangeText={setnumberOfRooms}
              placeholder="25"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.heading}>Enter Room Numbers</Text>
            <TextInput
              style={styles.input}
              value={roomNumbers}
              placeholder="210 , 211 , 212 , 250 , 251"
              onChangeText={setroomNumbers}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.heading}>Enter Number of Labs</Text>
            <TextInput
              style={styles.input}
              value={numberOfLabs}
              onChangeText={setnumberOfLabs}
              placeholder="4"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.heading}>Enter Lab Numbers</Text>
            <TextInput
              style={styles.input}
              value={labNumbers}
              onChangeText={setlabNumbers}
              placeholder="Lab1 , Lab2 , Lab3 , Lab4 , Lab5"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.heading}>Enter Years in Department</Text>
            <TextInput
              style={styles.input}
              value={yearsInDepartment}
              placeholder="Enter Password"
              onChangeText={setyearsInDepartment}
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  mainHeading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
  },
  inputContainer: {
    marginBottom: 25,
  },
  heading: {
    fontSize: 15,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
  },
  button: {
    backgroundColor: "#061228",
    paddingVertical: 10,
    paddingHorizontal: 35,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default DepartmentFacilitiesScreen;
