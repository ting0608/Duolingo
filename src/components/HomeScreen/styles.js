import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  buttonsContainer: {
    flex: 1,
    alignItems: "center",
  },

  logoContainer: {
    flex: 1,
    resizeMode: "contain",
  },

  logo: { flex: 1, resizeMode: "contain", height: 300, width: 300 },

  buttonSty: {
    width: "50%",
    height: "10%",
    backgroundColor: "lightgrey",
    opacity: 0.7,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    //color: "black", // Set the text color to black
  },
  root: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default styles;
