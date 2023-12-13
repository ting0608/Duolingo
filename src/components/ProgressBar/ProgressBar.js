import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ProgressBar = ({ progress }) => {
  return (
    <View style={styles.bg}>
      {/*[] is used to define an array, () is used to define a function */}
      <View style={[styles.fg, { width: `${progress * 100}%` }]}>
        <View style={styles.highlight}></View>
      </View>

      {/* ${progress*100}%``: This sets the width property of the component to a dynamic value calculated by multiplying the progress variable by 100 and appending the '%' symbol. This is a common technique used to represent progress visually, where the progress variable is typically a decimal value between 0 and 1. */}
    </View>
  );
};

const styles = StyleSheet.create({
  bg: {
    height: 20,
    backgroundColor: "lightgrey",
    flex: 1,
    borderRadius: 15,
  },
  fg: {
    height: 20,
    backgroundColor: "#fAC800",
    borderRadius: 15,
    flex: 1,
    //width: "50%",
  },
  highlight: {
    backgroundColor: "#fAD131",
    height: 5,
    width: "90%",
    borderRadius: 5,
    marginTop: 5,
    alignSelf: "center",
  },
});

export default ProgressBar;
