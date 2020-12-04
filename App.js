import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.fillerContainer}></View>

      <View style={styles.titleContainer}>
        <Text style={styles.text}>Hello World! -Marcus</Text>
      </View>

      <View style={styles.fillerContainer}></View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: "#C52C0B",
    fontWeight: "bold",
    textAlign: "center",

    fontSize: 50,
  },

fillerContainer:{
  padding:10,
  backgroundColor: "blue",
  flex:0.25,
  width: "50%",
  
},

titleContainer:{
  padding:10,
  backgroundColor: "orange",
  margin: 10,
  flex:0.5,
  justifyContent: "center",
  borderRadius:20,
  
},



});
