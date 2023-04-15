import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileAPIScreen from "./src/screens/ProfileAPIScreen";
const stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Profile" component={ProfileAPIScreen}/>
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default App;