import { StyleSheet } from "react-native";
import { Button } from "react-native";
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#58CC02",
    height: 50,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,

    borderRadius: 5,
    borderBottomWidth: 5,
    borderColor: "#57A600",
  },

  text: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    textDecorationLine: "underline",
    borderColor: "white",
    borderBottomWidth: 1.5,
  },

  disabledContainer: {
    backgroundColor: "lightgrey",
    borderColor: "grey",
  },
});

export default styles;
