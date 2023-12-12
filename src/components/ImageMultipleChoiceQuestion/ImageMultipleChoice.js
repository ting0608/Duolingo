import React, { useState, useEffect } from "react";
import { Text, View, Alert } from "react-native";
import ImageOption from "../ImageOption/ImageOption";
import Button from "../button/button";
import styles from "./styles";
import PropTypes from "prop-types";

//make sure you always import all the components you need
//in java you have xml for these types but rn-js no, so you NEED to import them

const ImageMultipleChoiceQuestion = ({ question, onCorrect, onWrong }) => {
  const [selected, setSelected] = useState(null);
  const onButtonPress = () => {
    //console.warn("Button pressed");
    if (selected.correct) {
      //Alert.alert("correct!");

      //move to next question
      //const nextIndex = currentQuestionIndex + 1;
      //console.log("current index", currentQuestionIndex);

      //setCurrentQuestionIndex(currentQuestionIndex + 1);
      //this is part of refactor, we move the relevant elements to their own resposible components
      onCorrect();
      setSelected(null);
      //console.log("changed index", nextIndex);
      //setCurrentQuestion(questions[nextIndex]);
    } else {
      onWrong();
    }
  };

  return (
    <>
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
    </>
  );
};

ImageMultipleChoiceQuestion.propTypes = {
  question: PropTypes.shape({
    question: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        text: PropTypes.string,
        image: PropTypes.string,
        correct: PropTypes.bool,
      })
    ).isRequired,
  }).isRequired,
};

export default ImageMultipleChoiceQuestion;
