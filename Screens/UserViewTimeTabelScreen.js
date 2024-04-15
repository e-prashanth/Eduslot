import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import Navbar from "./Navbar.js";

export default function Home({ navigation }) {
  // Dummy data for the table
  const initialTableData = [
    { name: "Machine Learning", time: "9:00 - 11:00", class: "252" },
    { name: "Cloude Computing", time: "11:30 - 1:30", class: "Lab1" },
    { name: "Web Programming", time: "2:00 - 4:00", class: "250" },
  ];

  const [tableData, setTableData] = useState(initialTableData);
  const [editable, setEditable] = useState(false);

  const handleEdit = () => {
    setEditable(true);
  };

  const handleSave = () => {
    setEditable(false);
    // Here you can handle saving the edited data to your database
  };

  return (
    <>
      <Navbar />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.mainHeading}>Summary</Text>
          <View style={styles.tableContainer}>
            {/* Table Headers */}
            <View style={styles.tableRow}>
              <Text style={styles.tableHeader}>Name</Text>
              <Text style={styles.tableHeader}>Time</Text>
              <Text style={styles.tableHeader}>Class</Text>
            </View>
            {/* Table Data */}
            {tableData.map((item, index) => (
              <View key={index} style={styles.tableRow}>
                <TextInput
                  style={styles.tableData}
                  value={item.name}
                  onChangeText={(text) => {
                    const newData = [...tableData];
                    newData[index].name = text;
                    setTableData(newData);
                  }}
                  editable={editable}
                  
                />
                <TextInput
                  style={styles.tableData}
                  value={item.time}
                  onChangeText={(text) => {
                    const newData = [...tableData];
                    newData[index].time = text;
                    setTableData(newData);
                  }}
                  editable={editable}

                />
                <TextInput
                  style={styles.tableData}
                  value={item.class}
                  onChangeText={(text) => {
                    const newData = [...tableData];
                    newData[index].class = text;
                    setTableData(newData);
                  }}
                  editable={editable}
                />
              </View>
            ))}
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={editable ? handleSave : handleEdit}>
              <Text style={styles.buttonText}>{editable ? "Save" : "Edit"}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => alert("OK button pressed")}>
              <Text style={styles.buttonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    padding: 20,
    paddingLeft:10
  },
  mainHeading: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  tableContainer: {
    borderWidth: 1,
    borderColor: "#061228",
    borderRadius: 5,
    marginBottom: 20,
    width:373

  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#061228",
    paddingVertical: 15,
    width:373
  },
  tableHeader: {
    flex: 1,
    fontWeight: "bold",
    textAlign: "center",
  },
  tableData: {
    flex: 1,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#061228",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});
