// src/screens/ConfirmationScreen.js

import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ConfirmationScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Registration Successful!</Text>
      <Text>Your host has been notified.</Text>
      <Button title="Finish" onPress={() => navigation.popToTop()} />
      <Button
        title="Register"
        onPress={() => navigation.navigate("Confirmation")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
  },
});

export default ConfirmationScreen;
