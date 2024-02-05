// src/screens/RegistrationFormScreen.js

import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const RegistrationFormScreen = ({ route, navigation }) => {
  const { selectedPerson } = route.params;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = () => {
    // Logic to submit the form data to the backend
    navigation.navigate("Confirmation");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Your Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Your Phone Number"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
      <Button title="Register" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  input: {
    height: 40,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
    width: "100%",
  },
});

export default RegistrationFormScreen;
