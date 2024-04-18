import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
  Alert,
  Modal,
} from "react-native";
import { useNavigation, useScrollToTop } from "@react-navigation/native";
import Navbar from "./Navbar";
const ModelComponent = ({ visible, onYes, onNo }) => {
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
              padding: 18,
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              height: 180,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                marginBottom: 20,
                color: "white",
                textAlign: "center",
              }}
            >
              {`Are you sure you want to Cancel the Booking?`}
            </Text>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity onPress={onYes} style={styles.button1}>
                <Text style={styles.buttonText1}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={onNo} style={styles.button1}>
                <Text style={styles.buttonText1}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};
const Dashboard = () => {
  const bookings = [
    {
      type: "lab",
      name: "Lab1",
      departmentName: "IT",
      timeslot: "8:40-9:30",
    },
    {
      type: "lab",
      name: "Lab1",
      departmentName: "IT",
      timeslot: "8:40-9:30",
    },
    {
      type: "lab",
      name: "Lab1",
      departmentName: "IT",
      timeslot: "8:40-9:30",
    },
    {
      type: "lab",
      name: "Lab1",
      departmentName: "IT",
      timeslot: "8:40-9:30",
    },
  ];
  const handleCancel = () => {
    setshowCancel(true);
  };
  const navigation = useNavigation();
  const handleBooking = (cardId) => {
    navigation.navigate("UserSlotBooking");
  };
  const handlePreviousBooking = () => {
    navigation.navigate("UserPreviousBookings");
  };

  const handleViewTimeTable = () => {
    navigation.navigate("UserViewTimeTable");
  };
  const [showCancel, setshowCancel] = useState(false);
  const handleYes = () => {
    Alert.alert("Canceled!", `The Booking is Canceled`);
    setshowCancel(false);
  };
  const handleNo = () => {
    setshowCancel(false);
  };
  return (
    <>
      <Navbar />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.cardsContainer}>
            <TouchableOpacity
              style={styles.card}
              onPress={() => handleBooking()}
            >
              <Text style={styles.cardText}> Book A {"\n"} Slot</Text>
              <Image
                style={styles.nextpageicon}
                source={require("../assets/nextPage30.png")} // Path to your profile icon image
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.card, styles.card2]}
              onPress={() => handlePreviousBooking()}
            >
              <Text style={styles.cardText}>Previous{"\n"}Bookings</Text>
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
          {bookings.length > 0 && (
            <>
              <Text style={styles.mainHeading}>Present Bookings:</Text>
            </>
          )}
          {bookings.map((booking, index) => (
            <View style={styles.BookingsContainer}>
              <Text style={styles.BookingText}>Lab1</Text>
              <TouchableOpacity
                style={{
                  backgroundColor: "red",
                  padding: 10,
                  marginLeft: 80,
                  width: 100,
                  borderRadius: 10,
                  alignItems: "center",
                  alignSelf: "center",
                }}
                onPress={handleCancel}
              >
                <Text style={{ color: "#fff", fontSize: 18 }}>Cancle</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <ModelComponent
          visible={showCancel}
          onNo={handleNo}
          onYes={handleYes}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  button1: {
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 35,
    borderRadius: 5,
    marginLeft: 20,
    width: 100,
    // marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText1: {
    color: "#061228",
    fontSize: 15,
    fontWeight: "bold",
  },
  BookingsContainer: {
    flexDirection: "row",
    // justifyContent: "center",
    // alignItems: "center",
    // alignSelf: "center",
    marginLeft: 20,
    marginVertical: 15,
    width: 300,
  },
  BookingText: {
    fontSize: 17,
    fontWeight: "500",
  },
  container: {
    // marginTop: 35,
    flex: 1,
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
    marginBottom: 20,
    fontSize: 25,
    marginLeft: 20,
    fontWeight: "500",
    color: "white",
  },
  mainHeading: {
    fontSize: 24,
    marginTop: 10,
    fontWeight: "bold",
    marginLeft: 20,
    marginBottom: 10,
  },
});

export default Dashboard;
