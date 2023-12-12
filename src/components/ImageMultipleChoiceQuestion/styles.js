import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  //flex: 1 means it will take up the whole screen
  title: {
    fontSize: 20,
    fontWeight: "bold",
    //backgroundColor: "red",
    alignSelf: "stretch",
  },

  optionContainer: {
    //border for options with round corners
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "lightgrey",
    backgroundColor: "",
    borderBottomWidth: 4,

    //size for this container
    width: "48%",
    height: "48%",

    alignItems: "center",
    padding: 10,
  },

  BIGoptionContainer: {
    width: "100%",
    flex: 1,
    //backgroundColor: "red",

    //flexDirection: "row" means the options will be in a row
    flexDirection: "row",

    //flexWrap: "wrap" means the options will wrap to the next line if there is no space
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignContent: "space-between",
  },
});

export default styles;
