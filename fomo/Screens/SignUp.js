import React from "react";
import { StyleSheet, ImageBackground, View, Text } from "react-native";
// import { createAppContainer, createStackNavigator } from "react-navigation";

// import HomeScreen from "./Screens/HomePage";

export default class Screen2 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ color: "white" }}>Welcome</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black"
  }
});
