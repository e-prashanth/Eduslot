import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet , TouchableOpacity } from 'react-native';
import Navbar from './Navbar.js';
import { useNavigation } from "@react-navigation/native";
const DepartmentFacilitiesScreen = () => {
  const [nameOfDepartment, setnameOfDepartment] = useState('');
  const [numberOfRooms, setnumberOfRooms] = useState(25);
  const [roomNumbers, setroomNumbers] = useState([]);
  const [numberOfLabs, setnumberOfLabs] = useState(0);
  const [labNumbers, setlabNumbers] = useState([]);
  const [yearsInDepartment, setyearsInDepartment] = useState([]);
  const navigation = useNavigation();
  const handleSubmit = () => {
    console.log('Inputs submitted:', nameOfDepartment, numberOfRooms, roomNumbers, numberOfLabs, labNumbers, yearsInDepartment);
    navigation.navigate('AdminDashboard');
  };

  return (
    <>
    <Navbar/>
    <View style={styles.container}>
      <Text style={styles.mainHeading}>Department Facilities</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.heading}>Enter Name of the Department</Text>
        <TextInput
          style={styles.input}
          value={nameOfDepartment}
          onChangeText={setnameOfDepartment}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.heading}>Enter Number of Rooms</Text>
        <TextInput
          style={styles.input}
          value={numberOfRooms}
          onChangeText={setnumberOfRooms}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.heading}>Enter Room Numbers</Text>
        <TextInput
          style={styles.input}
          value={roomNumbers}
          onChangeText={setroomNumbers}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.heading}>Enter Number of Labs</Text>
        <TextInput
          style={styles.input}
          value={numberOfLabs}
          onChangeText={setnumberOfLabs}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.heading}>Enter Lab Numbers</Text>
        <TextInput
          style={styles.input}
          value={labNumbers}
          onChangeText={setlabNumbers}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.heading}>Enter Years in Department</Text>
        <TextInput
          style={styles.input}
          value={yearsInDepartment}
          onChangeText={setyearsInDepartment}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor:"white"
  },
  mainHeading: {
    fontSize: 24,
    fontWeight: 'bold',
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
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  button: {
    backgroundColor: "#061228",
    paddingVertical: 10,
    paddingHorizontal: 35,
    borderRadius: 5,
    justifyContent:"center",
    alignItems:"center"
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default DepartmentFacilitiesScreen;
