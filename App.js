import React from "react";
//make sure you always import all the components you need
//in java you have xml for these types but rn-js no, so you NEED to import them
import { Text, View, Image, TextInput, StyleSheet} from "react-native";
import icon from "./assets/icon.png";
import styles from "./App.styles.js";
import codegenNativeCommands from "react-native/Libraries/Utilities/codegenNativeCommands";
import ImageOption from "./src/components/ImageOption/ImageOption.js";

//function component
//using arrow function to define the components, could allow to simplify
const App = () => {

  const status = "ok";
  return (
    <View style={styles.root}>
        <Text style = {styles.title}>Which of these is the "Glass"?</Text>
    
        {/* This BIGoptionContainer is the container for all the options */}
        <View style = {styles.BIGoptionContainer}>
        
        <ImageOption/>
        <ImageOption/>
        <ImageOption/>
        <ImageOption/>
       
    </View>
    </View>
  );
};

export default App;

