import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
  row: {
    flexDirection: "row",
    alignSelf: "flex-start",
    marginVertical: 10,
    height: 70,
  },
  text: {
    alignSelf: "flex-end",
    alignItems: "center",
    fontSize: 16,
    paddingHorizontal: 10,
    // alignSelf: "center",
  },
  blank: {
    borderBottomWidth: 2,
    borderColor: "lightgray",
    width: 100,
    //borderWidth: 1,
    //margin: 5,
  },

  optionsContainer: {
    flex: 1,
    alignItems: "center",
    alignContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },

  mascot: {
    width: "30%",
    aspectRatio: 3 / 4,
    marginRight: 10,
  },
});

export default styles;
