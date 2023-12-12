import React, { useEffect, useInsertionEffect, useState } from "react";
//make sure you always import all the components you need
//in java you have xml for these types but rn-js no, so you NEED to import them
import { Text, View, Image, TextInput, StyleSheet, Alert } from "react-native";
import icon from "./assets/icon.png";
import styles from "./App.styles.js";
import codegenNativeCommands from "react-native/Libraries/Utilities/codegenNativeCommands";
import ImageOption from "./src/components/ImageOption/ImageOption.js";
//import questions from "./assets/data/imageMultipleChoiceQuestions";

import Button from "./src/components/button/button";
import ImageMultipleChoiceQuestion from "./src/components/ImageMultipleChoiceQuestion/ImageMultipleChoice";
import OpenEndedQuestion from "./src/components/OpenEndedQuestion";
import questions from "./assets/data/openEndedQuestions";

//function component
//using arrow function to define the components, could allow to simplify
const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    questions[currentQuestionIndex]
  );

  // useEffect(() => {
  //   console.log(currentQuestion);
  // }, [currentQuestion]);

  useEffect(() => {
    if (currentQuestionIndex >= questions.length) {
      Alert.alert("You have finished the quiz!");
      setCurrentQuestionIndex(0);
    } else {
      //setCurrentQuestion(questions[currentQuestionIndex]) is to reset the current question to the question in the array
      setCurrentQuestion(questions[currentQuestionIndex]);
    }
  }, [currentQuestionIndex]);

  //mapping
  // const origin = [1,6,8];
  // const double = origin.map((num) => num * 2);
  // console.log(double);

  const onCorrect = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const onWrong = () => {
    Alert.alert("wrong! stupid");
  };

  return (
    <View style={styles.root}>
      {/* <ImageMultipleChoiceQuestion
        question={currentQuestion}
        onCorrect={onCorrect}
        onWrong={onWrong}
      /> */}

      <OpenEndedQuestion
        question={currentQuestion}
        onCorrect={onCorrect}
        onWrong={onWrong}
      />
    </View>
  );
};

export default App;
