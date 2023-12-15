import React, { useState } from "react";
import { Text, View, Image } from "react-native";
import Button from "../button/button";
import styles from "./styles";
import WordOption from "./WordOption";
import Gyarados from "../../../assets/images/gyarados.png";

const BlankFill = ({ question, onCorrect, onWrong }) => {
  const [selected, setSelected] = useState(null);

  const onButtonPress = () => {
    // console.log("selected", selected);
    // console.log("Correct", question.correct);
    if (selected === question.correct) {
      onCorrect();
    } else {
      onWrong();
    }
    setSelected(null);
  };

  return (
    <>
      <Text style={styles.title}>Complete the sentence</Text>
      <Image source={Gyarados} style={styles.Gyarados} resizeMode="cover" />
      <View style={styles.row}>
        <Text style={styles.text}>{question.textPre}</Text>

        <View style={styles.blank}>
          {selected && (
            <WordOption text={selected} onPress={() => setSelected(null)} />
          )}
        </View>
        <Text style={styles.text}>{question.textPost}</Text>
      </View>

      <View style={styles.optionsContainer}>
        {question.options.map((option) => (
          <WordOption
            key={option}
            text={option}
            isSelected={selected === option}
            onPress={() => setSelected(option)}
          />
        ))}
      </View>

      <Button text="Check" onPress={onButtonPress} disabled={!selected} />
    </>
  );
};

export default BlankFill;
