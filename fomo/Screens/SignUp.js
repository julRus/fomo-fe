import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  Picker,
  TextInput,
  ImageBackground,
  View,
  Text,
  TouchableOpacity
} from "react-native";
import axios from "axios";

export default function SignUpScreen(props) {
  const [enteredUsername, setEnteredUsername] = useState("");

  const [enteredEmail, setEnteredEmail] = useState("");

  const [enteredPassword, setEnteredPassword] = useState("");

  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState("");

  const [enteredLocation, setEnteredLocation] = useState("");

  const [pickedAge, setPickedAge] = useState("");

  const [pickedGender, setPickedGender] = useState("");

  const handleSetUsername = enteredText => {
    setEnteredUsername(enteredText);
  };

  const handleSetEmail = enteredText => {
    setEnteredEmail(enteredText);
  };

  const handleSetPassword = enteredText => {
    setEnteredPassword(enteredText);
  };

  const handleSetConfirmPassword = enteredText => {
    setEnteredConfirmPassword(enteredText);
  };

  const handleSetLocation = enteredText => {
    setEnteredLocation(enteredText);
  };

  const handleSetPickedAge = enteredText => {
    setPickedAge(enteredText);
  };

  const handleSetPickedGender = enteredText => {
    setPickedGender(enteredText);
  };

  const submitNewUser = () => {
    if (enteredPassword !== enteredConfirmPassword) {
      console.log("Password mismatch");
    } else {
      axios
        .post("https://fomo-api.herokuapp.com/register", {
          username: enteredUsername,
          password: enteredPassword,
          email: enteredEmail,
          location: enteredLocation,
          age: pickedAge,
          gender: pickedGender
        })
        .then(res => {
          console.log(res);
        });
    }
  };

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
              value={enteredUsername}
              onChangeText={handleSetUsername}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Enter your email"
              value={enteredEmail}
              onChangeText={handleSetEmail}
            />
            <Text style={styles.subTitle}>Password</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter your password"
              value={enteredPassword}
              onChangeText={handleSetPassword}
              secureTextEntry={true}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Confirm your password"
              value={enteredConfirmPassword}
              onChangeText={handleSetConfirmPassword}
              secureTextEntry={true}
            />
          </View>
          <View style={styles.viewContainer}>
            <Text style={styles.subTitle}>Extra Details</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Choose a location"
              value={enteredLocation}
              onChangeText={handleSetLocation}
            />
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={pickedAge}
                style={styles.picker}
                itemStyle={styles.pickerItem}
                mode="dropdown"
                onValueChange={handleSetPickedAge}
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
                selectedValue={pickedGender}
                style={styles.picker}
                itemStyle={styles.pickerItem}
                mode="dropdown"
                onValueChange={handleSetPickedGender}
              >
                <Picker.Item label="Select your gender" value="" />
                <Picker.Item label="Male" value="male" />
                <Picker.Item label="Female" value="female" />
                <Picker.Item label="Other" value="other" />
              </Picker>
            </View>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.button} onPress={submitNewUser}>
                Sign Up
              </Text>
            </TouchableOpacity>
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
  },

  buttonContainer: {
    borderColor: "rgba(196, 73, 7, 0.9)",
    borderWidth: 2,
    width: "30%",
    alignSelf: "center",
    marginVertical: 10,
    borderRadius: 5
  },

  button: {
    color: "white",
    paddingHorizontal: 15,
    paddingVertical: 5,
    justifyContent: "space-around",
    textAlign: "center"
  }
});
