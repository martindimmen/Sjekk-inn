// src/components/Dropdown.js

import React from "react";
import { View, Picker, StyleSheet } from "react-native";

const Dropdown = ({ selectedValue, onValueChange, items }) => {
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        onValueChange={onValueChange}
        style={styles.picker}
      >
        {items.map((item, index) => (
          <Picker.Item key={index} label={item.label} value={item.value} />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 15,
    borderWidth: 1,
    borderColor: "gray",
  },
  picker: {
    height: 50,
    width: "100%",
  },
});

export default Dropdown;
