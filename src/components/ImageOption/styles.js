import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

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


    optionImage: {
      width: "100%",
      //flex: 1 means the image will take up the whole container, used up whole spaces
      flex: 1,
      
    },

    optionText: {
      
    },
    }
  );

  export default styles;

