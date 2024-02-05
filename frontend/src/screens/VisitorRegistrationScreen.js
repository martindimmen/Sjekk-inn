// src/screens/VisitorRegistrationScreen.js

import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";
import Dropdown from "../components/Dropdown";

const VisitorRegistrationScreen = ({ navigation }) => {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [persons, setPersons] = useState([
    { label: "John Doe", value: "1" },
    { label: "Jane Smith", value: "2" },
  ]);

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Type to search..." />
      <Dropdown
        selectedValue={selectedPerson}
        onValueChange={(itemValue, itemIndex) => setSelectedPerson(itemValue)}
        items={persons}
      />
      <Button
        title="Next"
        onPress={() => navigation.navigate("RegistrationForm")}
      />
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

export default VisitorRegistrationScreen;
