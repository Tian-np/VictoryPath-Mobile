import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Easy() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This page is EZPZ lemon squeezy</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
  },
});
