import React from "react";
import { StyleSheet, View, Text } from "react-native";
import EventList from "./Components/EventList";

export default function MainPage(props) {
  const { keywords, familyFriendly } = props.navigation.state.params;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.settings}>settings</Text>
        <Text style={styles.title}>FOMO</Text>
      </View>
      <View style={styles.subHeader}>
        <Text style={styles.date}>{new Date().toDateString()}</Text>
        <Text style={styles.changeLocation}>Change</Text>
        <Text style={styles.location}>Manchester</Text>
      </View>
      <Text style={styles.eventsTitle}>Events</Text>
      <EventList keywords={keywords} />
      {/* <Event view={viewEvent} id={eventId} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "black"
  },
  header: {
    backgroundColor: "#383638"
  },

  settings: {
    color: "white",
    marginHorizontal: 10
  },

  title: {
    color: "white",
    fontSize: 30,
    opacity: 0.7,
    textAlign: "center"
  },
  date: {
    color: "white",
    paddingVertical: 10,
    borderBottomColor: "white",
    borderWidth: 0.4
  },

  subHeader: {
    width: "85%",
    left: 30
  },

  changeLocation: {
    color: "white",
    alignSelf: "flex-end",
    top: 48,
    marginRight: 10,
    backgroundColor: "black"
  },

  location: {
    color: "white",
    fontSize: 40,
    opacity: 0.7,
    borderBottomColor: "white",
    borderWidth: 0.4
  },

  eventsTitle: {
    color: "white",
    fontSize: 20,
    margin: 30,
    backgroundColor: "black"
  }
});
