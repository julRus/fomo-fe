import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground
} from "react-native";

import * as api from "../api";

export default function Event(props) {
  const [eventDetails, setEventDetails] = useState();
  const [loading, setLoading] = useState(true);

  const { id } = props.navigation.state.params;

  api.fetchEventByEventId(id).then(data => {
    setEventDetails(data.results);
    setLoading(false);
  });

  if (loading)
    return (
      <View style={styles.container}>
        <Text style={styles.loading}>Loading...</Text>
      </View>
    );
  else
    return (
      <View style={styles.container}>
        {/* <Image
          style={{ width: 410, height: 10, opacity: 0.7 }}
          source={{ uri: eventDetails.largeimageurl }}
          blurRadius={0}
        ></Image> */}
        <ImageBackground
          style={{
            width: "100%",
            height: "100%"
          }}
          source={{ uri: eventDetails.largeimageurl }}
          blurRadius={2}
        >
          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log("click")}
          >
            <Text style={styles.buttonText}>Attend</Text>
          </TouchableOpacity>
          <Text style={{ ...styles.date, ...styles.eventText }}>
            {new Date(eventDetails.date).toDateString()},{" "}
            {eventDetails.openingtimes.doorsopen} -
            {eventDetails.openingtimes.doorsclose}
          </Text>
          <Text style={{ ...styles.minAge, ...styles.eventText }}>
            Age Range: {eventDetails.MinAge}+
          </Text>
          <Text style={{ ...styles.description, ...styles.eventText }}>
            {eventDetails.description}
          </Text>
        </ImageBackground>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "black"
  },

  loading: {
    color: "white",
    fontSize: 20,
    textAlign: "center"
  },

  button: {
    width: "90%",
    alignSelf: "center",
    position: "absolute",
    top: 20
  },

  buttonText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    backgroundColor: "hotpink",
    opacity: 0.9
  },

  date: {
    marginTop: 60
  },

  eventText: {
    color: "white",
    fontSize: 20,
    textAlign: "center"
  },

  description: {
    marginTop: 30,
    fontSize: 30
  }
});
