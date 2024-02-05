import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { getTestMessage } from "../api/apiservice";

const HomeScreen = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchMessage = async () => {
      const testMessage = await getTestMessage();
      setMessage(testMessage);
    };

    fetchMessage();
  }, []);

  return (
    <View>
      <Text>{message || "Loading..."}</Text>
    </View>
  );
};
export default HomeScreen;
