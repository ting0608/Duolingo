import React from "react";
import { View, Image, Text, Pressable } from "react-native";
import styles from "./styles.js";
import PropTypes from "prop-types";

const ImageOption = (props) => {
  // console.log (props.text);
  //text:name, image:image
  // : to destructure the props
  // const {image, text: name} = props;
  const { image, text, isSelected, onPress } = props;
  return (
    <Pressable
      onPress={onPress}
      //ronPressIn={() => console.warn(text)}
      style={[
        styles.optionContainer,
        isSelected ? styles.selectedContainer : {},
      ]}
    >
      <Image
        source={{
          //props.image is to get the image from the App.js
          uri: image,
        }}
        resizeMode="contain"
        style={styles.optionImage}
      />

      {/* if isSelected is true, then use selectedText, else use optionText */}
      <Text style={isSelected ? styles.selectedText : styles.optionText}>
        {text}
      </Text>
    </Pressable>
  );
};

//to check the type of the props
ImageOption.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  onPress: PropTypes.func,
};

ImageOption.defaultProps = {
  text: "Default",
  isSelected: false,
  onPress: () => {}, //empty function
};

export default ImageOption;
