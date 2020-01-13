import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  Picker,
  TextInput,
  ImageBackground,
  View,
  Text
} from "react-native";
// import { StackNavigator} from "react-navigation"

export default function SignUpScreen(props) {
  /*
    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredPassword, setEnteredPassword] = useState("");
    const [authDetails, setAuthDetails] = useState({
      username: "",
      password: ""
    });
  */
  /*
    this.state = {
      username: "",
      email: "",
      password: "",
      ageRange: "",
      gender: ""
    };
  */

  SignUpScreen.navigationOptions = {
    headerStyle: { backgroundColor: "black" },
    headerTitleStyle: { color: "white" },
    headerTintColor: "white"
  };

  return (
    <View>
      <ImageBackground
        style={{
          width: "100%",
          height: "100%"
        }}
        source={require("../assets/bg.jpg")}
      >
        <ScrollView style={styles.scrollView}>
          <View style={styles.viewContainer}>
            <Text style={styles.logo}>FOMO</Text>
            <Text style={styles.title}>Create your account</Text>
            <Text style={styles.subTitle}>Username / Email</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter your username"
              // onChangeText={text => this.setState({ username })}
              // value={this.state.text}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Enter your email"
              // onChangeText={text => this.setState({ email })}
              // value={this.state.text}
            />
            <Text style={styles.subTitle}>Password</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter your password"
              // onChangeText={text => this.setState({ password })}
              // value={this.state.text}
            />
          </View>
          <View style={styles.viewContainer}>
            <Text style={styles.subTitle}>Extra Details</Text>
            <View style={styles.pickerContainer}>
              <Picker
                // selectedValue={this.state.ageRange}
                style={styles.picker}
                itemStyle={styles.pickerItem}
                mode="dropdown"
                onValueChange={itemValue =>
                  this.setState({ ageRange: itemValue })
                }
              >
                <Picker.Item label="Select your age range" value="" />
                <Picker.Item label="Under 16 years" value="0-15" />
                <Picker.Item label="16 - 25 years" value="16-25" />
                <Picker.Item label="26 - 39 years" value="26-39" />
                <Picker.Item label="40 - 65 years" value="40-65" />
                <Picker.Item label="Over 65 years" value="66-99" />
              </Picker>
            </View>
            <View style={styles.pickerContainer}>
              <Picker
                // selectedValue={this.state.gender}
                style={styles.picker}
                itemStyle={styles.pickerItem}
                mode="dropdown"
                onValueChange={itemValue =>
                  this.setState({ gender: itemValue })
                }
              >
                <Picker.Item label="Select your gender" value="" />
                <Picker.Item label="Male" value="male" />
                <Picker.Item label="Female" value="female" />
                <Picker.Item label="Other" value="other" />
              </Picker>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    // backgroundColor: "orange"
  },

  viewContainer: {
    // backgroundColor: "orange"
  },

  logo: {
    textAlign: "center",
    alignSelf: "center",
    marginTop: "5%",
    marginBottom: "5%",
    width: "80%",
    paddingBottom: "5%",
    fontSize: 40,
    color: "white",
    borderBottomColor: "white",
    borderBottomWidth: 0.5
    // backgroundColor: "orange"
  },

  title: {
    // marginTop: "10%",
    // marginBottom: 20,
    textAlign: "center",
    fontSize: 28,
    color: "white"
    // backgroundColor: "orange"
  },

  subTitle: {
    marginTop: "5%",
    textAlign: "center",
    fontSize: 16,
    color: "white"
    // backgroundColor: "orange"
  },

  textInput: {
    margin: "5%",
    alignSelf: "center",
    color: "white",
    fontSize: 15,
    padding: 5,
    width: 200,
    textAlign: "center",
    backgroundColor: "rgba(120, 120, 120, 0.6)",
    borderColor: "rgba(75, 75, 75, 1)",
    borderWidth: 1,
    borderRadius: 6
    // backgroundColor: "orange"
  },

  pickerContainer: {
    margin: "2%",
    alignSelf: "center",
    width: "50%"
    // backgroundColor: "orange"
  },

  picker: {
    // height: "30%",
    width: "95%",
    alignSelf: "center",
    color: "white",
    backgroundColor: "rgba(120, 120, 120, 0.6)",
    borderColor: "rgba(75, 75, 75, 1)",
    borderWidth: 1,
    borderRadius: 6
    // backgroundColor: "orange"
  }
});
