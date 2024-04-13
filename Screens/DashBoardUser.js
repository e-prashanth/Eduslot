import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Navbar from "./Navbar";

const Dashboard = () => {
  const handleCardClick = (cardId) => {
    // Function to execute when a card is clicked
    console.log("Clicked card with ID:", cardId);
  };

  return (
    <View style={styles.container}>
      <Navbar />
      <View style={styles.cardsContainer}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => handleCardClick(1)}
        >
          <Text style={styles.cardText}>Card 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => handleCardClick(2)}
        >
          <Text style={styles.cardText}>Card 2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => handleCardClick(3)}
        >
          <Text style={styles.cardText}>Card 3</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  cardsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: 150,
    height: 100,
    backgroundColor: "#e0e0e0",
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  cardText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Dashboard;
