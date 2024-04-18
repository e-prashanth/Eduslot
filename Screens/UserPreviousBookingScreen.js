import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import Navbar from "./Navbar";
export default function Home({ navigation }) {
  const data = [
    {
      name: "John Doe",
      date: "2024-04-20",
      timeSlot: "10:00 AM - 11:00 AM",
      booked: true,
      year: 2024,
    },
    {
      name: "Jane Smith",
      date: "2024-04-21",
      timeSlot: "11:00 AM - 12:00 PM",
      booked: false,
      year: 2024,
    },
    {
      name: "Jane Smith",
      date: "2024-04-21",
      timeSlot: "11:00 AM - 12:00 PM",
      booked: false,
      year: 2024,
    },
    {
      name: "Jane Smith",
      date: "2024-04-21",
      timeSlot: "11:00 AM - 12:00 PM",
      booked: false,
      year: 2024,
    },{
      name: "Jane Smith",
      date: "2024-04-21",
      timeSlot: "11:00 AM - 12:00 PM",
      booked: false,
      year: 2024,
    },
    {
      name: "Jane Smith",
      date: "2024-04-21",
      timeSlot: "11:00 AM - 12:00 PM",
      booked: false,
      year: 2024,
    },
    {
      name: "Jane Smith",
      date: "2024-04-21",
      timeSlot: "11:00 AM - 12:00 PM",
      booked: false,
      year: 2024,
    },
    {
      name: "Jane Smith",
      date: "2024-04-21",
      timeSlot: "11:00 AM - 12:00 PM",
      booked: false,
      year: 2024,
    },
    
    // Add more data objects as needed
  ];
  return (
    <>
      <Navbar />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.mainHeading}>Previous Bookings</Text>
          <View style={styles.RowLine1}></View>
          {data.map((item, index) => (
            <Card key={index} data={item} />
          ))}
        </View>
      </ScrollView>
    </>
  );
}

const Card = ({ data }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardText}>Name: {data.name}</Text>
      <Text style={styles.cardText}>Date: {data.date}</Text>
      <Text style={styles.cardText}>Time Slot: {data.timeSlot}</Text>
      <Text style={styles.cardText}>Booked: {data.booked ? "Yes" : "No"}</Text>
      <Text style={styles.cardText}>Year: {data.year}</Text>
    </View>
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
  },
  RowLine1: {
    width: 175,
    height: 3,
    backgroundColor: "#061228",
    marginBottom: 30,
    marginTop: 2,
  },
  card: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    backgroundColor:"#061228"
  },
  cardText: {
    fontSize: 16,
    marginBottom: 5,
    color:'white'
  },
});
