import React from "react";
import { StyleSheet, ImageBackground, View, Button } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "./Screens/HomePage";
import SignUp from "./Screens/SignUp";
import MainPage from "./Screens/MainPage";

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={{
            width: "100%",
            height: "100%"
          }}
          source={require("./assets/bg.jpg")}
        >
          <HomeScreen navigator={this.props.navigation.navigate} />
        </ImageBackground>
      </View>
    );
  }
}

const RootStack = createStackNavigator({
  Home: Home,
  SignUp: SignUp,
  MainPage: MainPage
});

const AppContainer = createAppContainer(RootStack);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black"
  }
});

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
