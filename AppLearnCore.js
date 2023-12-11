// import React from "react";
// //make sure you always import all the components you need
// //in java you have xml for these types but rn-js no, so you NEED to import them
// import { Text, View, ScrollView, Image, TextInput, StyleSheet} from "react-native";
// import icon from "./assets/icon.png";
// import styles from "./App.styles.js";
// import codegenNativeCommands from "react-native/Libraries/Utilities/codegenNativeCommands";

// //function component
// //using arrow function to define the components, could allow to simplify
// const App = () => {

//   const name = "CC";
//   // const time = 10;

//   const getName = () => {
//     return name;
//   }

//   return (
//     <ScrollView>
//     {/* see that it mentioned styles.root? can catch back into root in App.styles to adjust like html */}
//     <View style={styles.root}>

//       {/* you can even put multiple styles into it */}
//       <Text style={[styles.text, styles.backgroundDark]}>Hi! My name is {getName()}

//       </Text>
//       <Text style={styles.blue}>This line blue</Text>

//       <Text style={{ padding: "10px", fontSize: 20 }}  >
//         What is Lorem Ipsum? What is Lorem Ipsum? What is Lorem Ipsum? What is Lorem Ipsum? What is Lorem Ipsum? What is Lorem Ipsum? What is Lorem Ipsum? What is Lorem Ipsum? What is Lorem Ipsum?
//       </Text>

//       <Image
//         source={icon}
//         style={{ width: 50, height: 100, backgroundColor: "black" }}
    
//         resizeMode="contain"
//       />

//       {/* you can even include an source uri like html */}
//       <Image
//         source={{uri: "https://i.redd.it/rskneik2r4h41.jpg",}}
//         style={{ width: 200, height: 200}}
//         resizeMode="contain"
//       />

//       {/* you  cannot write statement like if in js becuz it doesnt return a value */}
//       {/* <Text>{time < 12 ? "Good Morning." : "Good afternoon."}</Text> */}
      
//       <TextInput placeholder="Your name"/>
//     </View>
//     </ScrollView>
    
//   )
// };

// //class component
// // class App extends React.Component{
// //   render() {
// //     return (
// //       <View style = {{flex: 1, alignItems: "center", justifyContent:"center"}}>
// //       <Text>Hi</Text>
// //       </View>
// //     )
// //     };
// // }

// // const style = StyleSheet.create({
// //   root:{
// //   flex: 1, alignItems: "center", justifyContent: "center" 
// //   },

// //   text:{
// //     flex: 1, alignItems: "center", justifyContent: "center" 
// //     },
// // });

// export default App;

