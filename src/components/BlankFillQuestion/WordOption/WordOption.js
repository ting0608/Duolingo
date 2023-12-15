import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";

const WordOption = ({ text, onPress, isSelected }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.root,
        { backgroundColor: isSelected ? "lightgray" : "white" },
      ]}
    >
      <Text
        style={[styles.text, { color: isSelected ? "lightgray" : "black" }]}
      >
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    borderColor: "lightgray",
    borderWidth: 2,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    paddingHorizontal: 15,
  },
  text: {},
});

export default WordOption;
