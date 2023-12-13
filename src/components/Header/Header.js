import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import ProgressBar from "../ProgressBar";

import heart from "../../../assets/images/heart.png";

const Header = ({ progress, lives }) => {
  return (
    <View style={styles.root}>
      <ProgressBar progress={progress} />

      <Image source={heart} style={styles.icon} resizeMode="contain" />
      <Text style={styles.lives}>{lives}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "center",
  },

  icon: {
    width: 30,
    height: 30,
    marginHorizontal: 10,
  },
  lives: {
    fontWeight: "bold",
    color: "red",
    fontSize: 18,
  },
});

export default Header;
