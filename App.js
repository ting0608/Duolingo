import React, { useState } from "react";
//make sure you always import all the components you need
//in java you have xml for these types but rn-js no, so you NEED to import them
import { Text, View, Image, TextInput, StyleSheet } from "react-native";
import icon from "./assets/icon.png";
import styles from "./App.styles.js";
import codegenNativeCommands from "react-native/Libraries/Utilities/codegenNativeCommands";
import ImageOption from "./src/components/ImageOption/ImageOption.js";
import question from "./assets/data/oneQuestionWithOption.js";

import Button from "./src/components/button/button";

//function component
//using arrow function to define the components, could allow to simplify
const App = () => {
  const [selected, setSelected] = useState(null);

  const onButtonPress = () => {
    console.warn("Button pressed");
  };
  //mapping
  // const origin = [1,6,8];
  // const double = origin.map((num) => num * 2);
  // console.log(double);

  return (
    <View style={styles.root}>
      <Text style={styles.title}>{question.question}</Text>

      {/* This BIGoptionContainer is the container for all the options */}
      <View style={styles.BIGoptionContainer}>
        {/* The code below is to map the options in the question to the ImageOption component */}
        {question.options.map((option) => (
          <ImageOption
            key={option.id} //key is to identify the component
            image={option.image}
            text={option.text}
            isSelected={selected?.id === option.id}
            onPress={() => setSelected(option)}
          />
        ))}
        {/* ImageOption below is a component, which is defined in src/components/ImageOption/ImageOption.js */}

        {/* hardcode way to do it */}
        {/* <ImageOption
        image = "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png"
        text = "coffee"
        /> */}
      </View>

      <Button text="Check" onPress={onButtonPress} disabled={!selected} />
    </View>
  );
};

export default App;
