import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { RadioButton, RadioGroup } from "react-native-flexi-radio-button";
import { Picker } from "@react-native-picker/picker";
import Navbar from "./Navbar.js";
import { useNavigation } from "@react-navigation/native";
const RepeatableFormPart = ({
  formData,
  onChange,
  ClassName,
  labs,
  classes,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <>
      <View style={styles.RowLine}></View>
      <View style={styles.inputContainer}>
        <Text style={styles.heading}>Enter Time</Text>
        <View style={styles.timeContainer}>
          <TextInput
            style={[styles.input, styles.timeInput]}
            value={formData.startTime}
            onChangeText={(text) => onChange("startTime", text)}
          />
          <Text>----</Text>
          <TextInput
            style={[styles.input, styles.timeInput, styles.timeInput2]}
            value={formData.endTime}
            onChangeText={(text) => onChange("endTime", text)}
          />
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.heading}>Enter the Day</Text>
        <TextInput
          style={styles.input}
          value={formData.selectedDay}
          onChangeText={(text) => onChange("selectedDay", text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.heading}>Name of the Class</Text>
        <TextInput
          style={styles.input}
          value={formData.ClassName}
          onChangeText={(text) => onChange("ClassName", text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.heading}>Select the Lab/Class</Text>
        <RadioGroup
          onSelect={(index) => setSelectedOption(index)}
          size={24}
          thickness={2}
          color="#061228"
        >
          <RadioButton value={0} color="#061228">
            <Text>Lab</Text>
          </RadioButton>
          <RadioButton value={1} color="#061228">
            <Text>Class</Text>
          </RadioButton>
          <RadioButton value={2} color="#061228">
            <Text>None</Text>
          </RadioButton>
        </RadioGroup>

        {selectedOption === 0 && (
          <View style={styles.inputContainer}>
            <Text style={styles.heading}>Select the Lab</Text>
            <Picker
              selectedValue={formData.selectedClass}
              onValueChange={(itemValue) =>
                onChange("selectedClass", itemValue)
              }
              style={{
                height: 50,
                width: 350,
                backgroundColor: "#061228",
                color: "white",
              }}
            >
              {labs.map((lab, index) => (
                <Picker.Item key={index} label={lab} value={lab} />
              ))}
            </Picker>
          </View>
        )}
        {selectedOption === 1 && (
          <View style={styles.inputContainer}>
            <Text style={styles.heading}>Select the Class</Text>
            <Picker
              selectedValue={formData.selectedLab}
              onValueChange={(itemValue) => onChange("selectedLab", itemValue)}
              style={{
                height: 50,
                width: 350,
                backgroundColor: "#061228",
                color: "white",
              }}
            >
              {classes.map((lab, index) => (
                <Picker.Item key={index} label={lab.toString()} value={lab} />
              ))}
            </Picker>
          </View>
        )}
      </View>
    </>
  );
};

export default function CreateTimeTable() {
  const [formDataArray, setFormDataArray] = useState([
    {
      ClassName: "",
      selectedYear: "none",
      selectedLab: "none",
      selectedClass: "none",
      selectedDay: "",
      startTime: "",
      endTime: "",
      selectedDepartment: "",
      years: ["2nd Year", "3rd Year", "4th Year"],
      labs: ["Lab 1", "Lab 2", "Lab 3", "Lab 4"],
      classes: [210, 211, 212, 213, 251, 250, 252],
    },
  ]);
  const [selectedClass, setSelectedClass] = useState("none");
  const [selectedYear, setSelectedYear] = useState("none");
  const [selectedDepartment, setselectedDepartment] = useState("");
  const years = ["2nd Year", "3rd Year", "4th Year"];
  const [selectedLab, setSelectedLab] = useState("none");
  const navigation = useNavigation();

  const handleSubmit = () => {
    console.log("Form Data:", formDataArray);
    navigation.navigate("AdminDashboard");
  };

  const handleAddForm = () => {
    setFormDataArray([
      ...formDataArray,
      {
        ClassName: "",
        selectedYear: "none",
        selectedLab: "none",
        selectedClass: "none",
        selectedDay: "",
        startTime: "",
        endTime: "",
        selectedDepartment: "",
        years: ["2nd Year", "3rd Year", "4th Year"],
        labs: ["Lab 1", "Lab 2", "Lab 3", "Lab 4"],
        classes: [210, 211, 212, 213, 251, 250, 252],
      },
    ]);
  };

  const handleChange = (formIndex, field, value) => {
    const updatedFormDataArray = [...formDataArray];
    updatedFormDataArray[formIndex] = {
      ...updatedFormDataArray[formIndex],
      [field]: value,
    };
    setFormDataArray(updatedFormDataArray);
  };

  return (
    <>
      <Navbar />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.mainHeading}>Time Table</Text>
          <View style={styles.RowLine1}></View>
          <View style={styles.inputContainer}>
            <Text style={styles.heading}>Select the Year</Text>
            <Picker
              selectedValue={selectedYear}
              onValueChange={(itemValue) => setSelectedYear(itemValue)}
              style={{
                height: 50,
                width: 350,
                backgroundColor: "#061228",
                color: "white",
              }}
            >
              {years.map((year, index) => (
                <Picker.Item key={index} label={year} value={year} />
              ))}
            </Picker>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.heading}>Enter the Department</Text>
            <TextInput
              style={styles.input}
              value={selectedDepartment}
              onChangeText={setselectedDepartment}
            />
          </View>
          {formDataArray.map((formData, index) => (
            <RepeatableFormPart
              key={index}
              formData={formData}
              onChange={(field, value) => handleChange(index, field, value)}
              selectedClass={selectedClass}
              selectedLab={selectedLab}
              labs={formData.labs}
              classes={formData.classes}
            />
          ))}
          <View style={styles.ButtonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleAddForm}>
              <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  RowLine: {
    width: 350,
    height: 2,
    backgroundColor: "#061228",
    marginTop: 35,
    marginBottom: 5,
  },
  RowLine1: {
    width: 130,
    height: 3,
    backgroundColor: "#061228",
    marginBottom: 30,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  mainHeading: {
    fontSize: 24,
    fontWeight: "bold",
    //
  },
  heading: {
    fontSize: 18,
    marginBottom: 5,
  },
  inputContainer: {
    marginBottom: 25,
  },
  input: {
    borderWidth: 1,
    borderColor: "#061228",
    borderRadius: 5,
    padding: 10,
  },
  timeInput: {
    width: 80,
    marginRight: 10,
  },
  timeInput2: {
    marginLeft: 10,
  },
  timeContainer: {
    flexDirection: "row",
    // justifyContent:"space-around",
    alignItems: "center",
  },
  ButtonContainer: {
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#061228",
    paddingVertical: 10,
    paddingHorizontal: 35,
    borderRadius: 5,
    marginLeft: 20,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
});
