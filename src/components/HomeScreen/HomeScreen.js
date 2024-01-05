import React from "react";
import { View, Button, Image } from "react-native";
import Start from "../../../Start";
import styles from "./styles";
const Home = ({ navigation }) => {
  return (
    <View style={styles.buttonsContainer}>
      <Image
        source={require("../../../images/Pokelingo_bg.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.buttonSty}>
        <Button
          title="Click here to start"
          onPress={() => navigation.navigate("Start")}
        />
      </View>
    </View>
  );
};
export default Home;
