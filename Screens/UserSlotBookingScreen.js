import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  TouchableOpacity,
  Alert,
  Modal,
} from "react-native";
import Navbar from "./Navbar";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { RadioButton, RadioGroup } from "react-native-flexi-radio-button";
import { useNavigation } from "@react-navigation/native";
const ModelComponent = ({
  navigation,
  visible,
  onYes,
  onNo,
  type,
  timeslot,
}) => {
  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={onNo}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          }}
        >
          <View
            style={{
              backgroundColor: "#061228",
              borderRadius: 10,
              padding:18,
              alignItems: "center",
              justifyContent:"center",
              textAlign:"center",
              height:180
            }}
          >
            <Text style={{ fontSize: 18, marginBottom: 20, color:"white" , textAlign:"center"}}>
              {`Are you sure you want to book ${type} for ${timeslot}?`}
            </Text>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                onPress={onYes}
                style={styles.button1}
              >
                <Text style={styles.buttonText1}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={onNo}
                style={styles.button1}
              >
                <Text style={styles.buttonText1}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default function SlotBooking({ navigation }) {
  const Departments = ["IT", "ECE", "CSE", "MECH", "CIVIL"];
  const years = ["2nd Year", "3rd Year", "4th Year"];
  const timesSlots = ["8:40-9:30", "9:30-10:20", "10:20-11-10"];
  const classes = [210, 211, 212, 213, 252, 251];
  const labs = ["Lab 1", "Lab 2", "Lab 3", "Lab 4"];
  const [selectedDepartment, setselectedDepartment] = useState(Departments[0]);
  const [selectedYear, setSelectedYear] = useState(years[0]);
  const [selectedTimeSlot, setselectedTimeSlot] = useState(timesSlots[0]);
  const [selectedOption, setSelectedOption] = useState();
  const [selectedClass, setSelectedClass] = useState(classes[0]);
  const [selectedLab, setSelectedLab] = useState(labs[0]);
  const [showModel, setshowModel] = useState(false);
  const [selectedType, setselectedType] = useState("");
  handleYes = () => {
    Alert.alert(
      "Booked!",
      `The selected ${selectedType} is booked successfully for the ${selectedTimeSlot}`
    );
    navigation.goBack();
  };

  handleNo = () => {
    Alert.alert(
      "Canceled!",
      `The Booking is Canceled`
    );
    navigation.goBack();
  };
  const handleSubmit = (type, number) => {
    setselectedType(type);
    setshowModel(true);
    if(type=='class'){
      setSelectedClass(number);
    }
    else
    setSelectedLab(number);
  };
  return (
    <>
      <Navbar />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.mainHeading}>Slot Booking</Text>
          <View style={styles.RowLine1}></View>
          <View style={styles.inputContainer}>
            <Text style={styles.heading}>Select the Department</Text>
            <Picker
              selectedValue={selectedDepartment}
              onValueChange={setselectedDepartment}
              style={{
                height: 50,
                width: 350,
                backgroundColor: "#061228",
                color: "white",
              }}
            >
              {Departments.map((department, index) => (
                <Picker.Item
                  key={index}
                  label={department.toString()}
                  value={department}
                />
              ))}
            </Picker>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.heading}>Select Year</Text>
            <Picker
              selectedValue={selectedYear}
              onValueChange={setSelectedYear}
              style={{
                height: 50,
                width: 350,
                backgroundColor: "#061228",
                color: "white",
              }}
            >
              {years.map((year, index) => (
                <Picker.Item key={index} label={year.toString()} value={year} />
              ))}
            </Picker>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.heading}>Select Time</Text>
            <Picker
              selectedValue={selectedTimeSlot}
              onValueChange={setselectedTimeSlot}
              style={{
                height: 50,
                width: 350,
                backgroundColor: "#061228",
                color: "white",
              }}
            >
              {timesSlots.map((timeslot, index) => (
                <Picker.Item
                  key={index}
                  label={timeslot.toString()}
                  value={timeslot}
                />
              ))}
            </Picker>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.heading}>Select the Lab/Class</Text>
            <RadioGroup
              onSelect={(index) => setSelectedOption(index)}
              size={24}
              thickness={2}
              color="#061228"
              style={styles.RadioGroup}
            >
              <RadioButton value={0} color="#061228">
                <Text>Lab</Text>
              </RadioButton>
              <RadioButton value={1} color="#061228">
                <Text>Class</Text>
              </RadioButton>
            </RadioGroup>

            {selectedOption === 0 && (
              <View style={styles.inputContainer}>
                <Text style={styles.heading}>Available Labs</Text>
                <View style={styles.AvaiableContainer}>
                {labs.length == 0 && (<Text style={styles.SorryText}>Sorry No Labs Are Available at your required time !</Text>)}
                  {labs.map((lab, index) => (
                    <View style={styles.ButtonContainer}>
                      <Text style={styles.text}>{lab} :</Text>
                      <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                          handleSubmit("lab", lab);
                        }}
                      >
                        <Text style={styles.buttonText}>Book</Text>
                      </TouchableOpacity>
                    </View>
                  ))}
                </View>
              </View>
            )}
            {selectedOption === 1 && (
              <View style={styles.inputContainer}>
                <Text style={styles.heading}>Available Class</Text>
                <View style={styles.AvaiableContainer}>
                  {classes.length == 0 && (<Text style={styles.SorryText}>Sorry No Classes Are Available at your required time !</Text>)}
                  {classes.map((lab, index) => (
                    <View key={index} style={styles.ButtonContainer}>
                      <Text style={styles.text}>{lab} :</Text>
                      <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                          handleSubmit("class", lab);
                        }}
                      >
                        <Text style={styles.buttonText}>Book</Text>
                      </TouchableOpacity>
                    </View>
                  ))}
                </View>
              </View>
            )}
            <ModelComponent
              visible={showModel}
              onYes={handleYes}
              onNo={handleNo}
              type={selectedType}
              timeslot={selectedTimeSlot}
              navigation={navigation}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  SorryText:{
    marginTop:20,
    fontSize:18,
    color:'#061228'
  },
  button1:{
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 35,
    borderRadius: 5,
    marginLeft: 20,
    width:100,
    // marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText1:{
    color: "#061228",
    fontSize: 15,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    padding: 20,
  },
  mainHeading: {
    fontSize: 24,
    fontWeight: "bold",
  },
  RowLine1: {
    width: 110,
    height: 3,
    backgroundColor: "#061228",
    marginBottom: 30,
    marginTop: 2,
  },
  ButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    marginBottom: 20,
    marginTop: 10,
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
  button: {
    backgroundColor: "#061228",
    paddingVertical: 10,
    paddingHorizontal: 35,
    borderRadius: 5,
    marginLeft: 20,
    width: 150,
    // marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    // color: "#fff",
    fontSize: 15,
    textAlign: "center",
    fontWeight: "bold",
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
  AvaiableContainer: {
    justifyContent: "center",
    alignItems: "center",
    textAlign:"center"
  },
  RadioGroup: {
    marginBottom: 15,
  },
});
