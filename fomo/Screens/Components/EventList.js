import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList
} from "react-native";
import * as api from "../../api";

export default function EventList(props) {
  const [skiddleEvents, setSkiddleEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api.fetchSkiddleEvents().then(data => {
      const { keywords } = props;
      const { results } = data;
      const eventsByKeywords = results.filter(event => {
        if (
          event.EventCode === keywords[0] ||
          event.EventCode === keywords[1] ||
          event.EventCode === keywords[2] ||
          event.EventCode === keywords[3]
        ) {
          return event;
        }
      });
      setSkiddleEvents(eventsByKeywords);
      setIsLoading(false);
    });
  });

  if (isLoading)
    return (
      <View style={styles.container}>
        <Text style={styles.loading}>Loading...</Text>
      </View>
    );
  return (
    <View>
      <FlatList
        data={skiddleEvents}
        renderItem={({ item }) => (
          <TouchableOpacity key={item.id}>
            <View style={styles.events} key={item.id}>
              <Text style={styles.eventText}>
                {new Date(item.date).toDateString()}
              </Text>
              <Text style={styles.eventText}>{item.EventCode}</Text>
              <Text style={styles.eventText}>
                {item.openingtimes.doorsopen} - {item.openingtimes.doorsclose}
              </Text>
              <Text style={styles.eventText}>{item.eventname}</Text>
              <Text style={styles.eventText}>
                {item.venue.name}, {item.venue.address}, {item.venue.town},{" "}
                {item.venue.postcode}
              </Text>
              <Text style={styles.eventText}>
                {item.entryprice === "0.00" ? "Free" : `£${item.entryprice}`}
              </Text>
              <Text style={styles.eventText}>
                {item.minage ? "All" : `${item.minage}+`}
              </Text>
            </View>
          </TouchableOpacity>
        )}
        numColumns={1}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center"
  },
  loading: {
    color: "white",
    textAlign: "center",
    top: -40
  },
  events: {
    marginVertical: 10
  },

  eventText: {
    color: "white"
  }
});
