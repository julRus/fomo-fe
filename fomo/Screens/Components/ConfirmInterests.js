import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  Modal
} from "react-native";

export default function ConfirmInterests(props) {
  return (
    <View>
      <Modal
        style={styles.container}
        visible={props.view}
        animationType="slide"
      >
        <Text style={styles.title}>Confirm these interests?</Text>
        <TouchableOpacity>
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Choose Again"
                color="hotpink"
                onPress={props.cancel}
              />
            </View>
            <View style={styles.button}>
              <Button title="Confirm" color="grey" onPress={props.confirm} />
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    margin: 20,
    top: 70,
    elevation: 20,
    backgroundColor: "black",
    paddingVertical: 180,
    paddingHorizontal: 50,
    borderRadius: 6,
    opacity: 0.8
  },

  title: {
    fontSize: 20,
    margin: 0,
    padding: 0,
    color: "white",
    textAlign: "center"
  },

  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    marginTop: 20
  },
  button: {
    width: 120,
    textAlign: "center",
    marginHorizontal: 30
  }
});
