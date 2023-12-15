import React, { useEffect, useInsertionEffect, useState } from "react";
//make sure you always import all the components you need
//in java you have xml for these types but rn-js no, so you NEED to import them
import { Text, View, Image, TextInput, StyleSheet, Alert } from "react-native";
//import icon from "./assets/icon.png";
import styles from "./App.styles.js";
import codegenNativeCommands from "react-native/Libraries/Utilities/codegenNativeCommands";
import ImageOption from "./src/components/ImageOption/ImageOption.js";
//import questions from "./assets/data/imageMultipleChoiceQuestions";
import AsyncStorage from "@react-native-async-storage/async-storage";

//import Button from "./src/components/button/button";
import ImageMultipleChoiceQuestion from "./src/components/ImageMultipleChoiceQuestion/ImageMultipleChoice";
import OpenEndedQuestion from "./src/components/OpenEndedQuestion";
//import questions from "./assets/data/openEndedQuestions";
import questions from "./assets/data/allQuestions";

import Header from "./src/components/Header";
import { ActivityIndicator } from "react-native";
import BlankFill from "./src/components/BlankFillQuestion/BlankFill.js";

//function component
//using arrow function to define the components, could allow to simplify
const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    questions[currentQuestionIndex]
  );

  const [lives, setLives] = useState(3);
  const [hasLoaded, setHasLoaded] = useState(false);

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

  useEffect(() => {
    loadData();
  }, []);

  //ctrl-cmd-z to call the app menu
  useEffect(() => {
    if (hasLoaded) {
      saveData();
    }
    //saveData();
  }),
    [lives, currentQuestionIndex, hasLoaded];

  //mapping
  // const origin = [1,6,8];
  // const double = origin.map((num) => num * 2);
  // console.log(double);

  const onCorrect = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const restart = () => {
    setLives(3);
    setCurrentQuestionIndex(0);
  };

  const onWrong = () => {
    if (lives <= 1) {
      Alert.alert("GG. Pay and get 3 more lives", "Imma just kidding <3", [
        {
          text: "Proceed to payment",
          onPress: () => {
            setCurrentQuestionIndex(0);
            setLives(3);
          },
        },

        {
          text: "Try again",
          onPress: () => {
            setCurrentQuestionIndex(0);
            setLives(3);
          },
        },
      ]);
    } else {
      Alert.alert("Wrong!");
      setLives(lives - 1);
      saveData();
    }
  };

  const saveData = async () => {
    await AsyncStorage.setItem("lives", lives.toString());
    await AsyncStorage.setItem(
      "currentQuestionIndex",
      currentQuestionIndex.toString()
    );
  };

  const loadData = async () => {
    const loadedLives = await AsyncStorage.getItem("lives");
    if (loadedLives) {
      setLives(parseInt(loadedLives));
    }

    const currentQuestionIndex = await AsyncStorage.getItem(
      "currentQuestionIndex"
    );
    if (currentQuestionIndex) {
      //setCurrentQuestionIndex(0);
      setCurrentQuestionIndex(parseInt(currentQuestionIndex));
    }

    setHasLoaded(true); //this is to make sure that the app has loaded before we show the app
  };

  if (!hasLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.root}>
      {/* currentQuestionIndex / questions.length calculates the progress as a ratio of the current question number to the total number of questions. */}
      {/* For example, if the user is on question 5 out of 10, progress would be 0.5, representing 50% completion. */}
      <Header
        progress={currentQuestionIndex / questions.length}
        lives={lives}
      />

      {currentQuestion.type === "BLANK_FILL" && (
        <BlankFill
          question={currentQuestion}
          onCorrect={onCorrect}
          onWrong={onWrong}
        />
      )}

      {currentQuestion.type === "IMAGE_MULTIPLE_CHOICE" && (
        <ImageMultipleChoiceQuestion
          question={currentQuestion}
          onCorrect={onCorrect}
          onWrong={onWrong}
        />
      )}

      {currentQuestion.type === "OPEN_ENDED" ? (
        <OpenEndedQuestion
          question={currentQuestion}
          onCorrect={onCorrect}
          onWrong={onWrong}
        />
      ) : null}
    </View>
  );
};

export default App;
