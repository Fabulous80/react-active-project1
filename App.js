import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World !</Text>
      
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFC300",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: "#C52C0B",
    fontWeight: "bold",
    fontSize: 50,
  },
});
