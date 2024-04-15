import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Navbar from './Navbar.js';
const DepartmentFacilitiesScreen = () => {
  const [nameOfDepartment, setnameOfDepartment] = useState('Inforamtion Technology (IT)');
  const [numberOfRooms, setnumberOfRooms] = useState(25);
  const [roomNumbers, setroomNumbers] = useState([]);
  const [numberOfLabs, setnumberOfLabs] = useState(0);
  const [labNumbers, setlabNumbers] = useState([]);
  const [yearsInDepartment, setyearsInDepartment] = useState([]);

  const handleSubmit = () => {
    console.log('Inputs submitted:', nameOfDepartment, numberOfRooms, roomNumbers, numberOfLabs, labNumbers, yearsInDepartment);
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
      <Button title="Submit" onPress={handleSubmit} />
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  mainHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  heading: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
});

export default DepartmentFacilitiesScreen;
