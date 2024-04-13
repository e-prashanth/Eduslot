import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";


const Navbar = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/logo.png")} // Path to your logo image
        style={styles.logo}
      />
      <TouchableOpacity onPress={() => {navigation.navigate("UserPreviousBokkings");}}>
        <Image
          source={require("../assets/ProfileIcon.png")} // Path to your profile icon image
          style={styles.profileIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#ffffff", // Navbar background color
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0", // Border color
  },
  logo: {
    width: 140, // Adjust width as needed
    height: 40, // Adjust height as needed
  },
  profileIcon: {
    width: 30, // Adjust width as needed
    height: 30, // Adjust height as needed
    borderRadius: 15, // Make it circular
  },
});

export default Navbar;
