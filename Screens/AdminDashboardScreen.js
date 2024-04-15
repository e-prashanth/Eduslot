import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Navbar from "./Navbar";

const AdminDashboard = () => {
  const navigation = useNavigation();
  const handleCreateFacilities = () => {
    navigation.navigate("DepartmentFacilities");
  };
  const handleCreateTimeTable = () => {
    navigation.navigate("CreateTimeTable");
  };

  const handleViewTimeTable = () => {
    navigation.navigate("ViewTimeTable");
  };

  return (
    <>
    <Navbar />
    <View style={styles.container}>
      
      <View style={styles.cardsContainer}>
        <TouchableOpacity style={styles.card} onPress={() => handleCreateFacilities()}>
          <Text style={styles.cardText}> Create{"\n"} Department{"\n"} Facilities</Text>
          <Image
            style={styles.nextpageicon}
            source={require("../assets/nextPage30.png")} // Path to your profile icon image
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.card, styles.card2]}
          onPress={() => handleCreateTimeTable()}
        >
          <Text style={styles.cardText}>Create Time{"\n"}Table</Text>
          <Image
            style={styles.nextpageicon}
            source={require("../assets/nextPage30.png")} // Path to your profile icon image
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.card, styles.card3]}
          onPress={() => handleViewTimeTable()}
        >
          <Text style={styles.cardText}>View Time{"\n"}Tables</Text>
          <Image
            style={styles.nextpageicon}
            source={require("../assets/nextPage30.png")} // Path to your profile icon image
          />
        </TouchableOpacity>
      </View>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginTop: 35,
    flex: 1,
    backgroundColor: "#fff",
  },
  cardsContainer: {
    marginTop: 30,
    flex: 1,
    alignItems: "center",
  },
  card: {
    width: 350,
    height: 150,
    backgroundColor: "#e0e0e0",
    marginVertical: 15,
    justifyContent: "center",

    borderRadius: 10,
    backgroundColor: "#061228",
  },
  card2: {
    backgroundColor: "#061228CC",
  },
  card3: {
    backgroundColor: "#06122899",
  },
  nextpageicon: {
    marginRight: 10,
    alignSelf: "flex-end",
  },
  cardText: {
    marginBottom: 10 ,
    fontSize: 25,
    marginLeft: 20,
    fontWeight: "500",
    color: "white",
  },
});

export default AdminDashboard;
