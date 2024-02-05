import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import VisitorRegistrationScreen from "./src/screens/VisitorRegistrationScreen";
import RegistrationFormScreen from "./src/screens/RegistrationFormScreen";
import ConfirmationScreen from "./src/screens/ConfirmationScreen";

// Create the stack navigator
const Stack = createStackNavigator();

// Define the App component
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="VisitorRegistration">
        <Stack.Screen
          name="VisitorRegistration"
          component={VisitorRegistrationScreen}
          options={{ title: "Visitor Registration" }}
        />
        <Stack.Screen
          name="RegistrationForm"
          component={RegistrationFormScreen}
          options={{ title: "Registration Form" }}
        />
        <Stack.Screen
          name="Confirmation"
          component={ConfirmationScreen}
          options={{ title: "Confirmation" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
