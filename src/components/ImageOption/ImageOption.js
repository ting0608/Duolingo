import React from 'react';
import { View, Image, Text} from 'react-native';
import styles from './styles.js';

const ImageOption = () => {
    return(
        <View style = {styles.optionContainer}>
        <Image 
            source={{
                uri: "/Users/tingcccc/Desktop/TestProj/Duolingo/images/cup.png"
            }}
            resizeMode = "contain"
            style = {styles.optionImage}
        />
        <Text styles = {styles.optionText}>Glass</Text>
        </View>
    )

}

export default ImageOption;