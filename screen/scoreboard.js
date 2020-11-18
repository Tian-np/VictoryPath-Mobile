import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
  TextInput,
} from "react-native";
// import { HeaderButtons, Item } from "react-navigation-header-buttons";
// import { useSelector, useDispatch } from "react-redux";

// import CustomHeaderButton from "../components/CustomHeaderButton";
// import { toggleFavorite } from "../store/actions/mealsAction";

export default function Scoreboard() {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 40, height: 40 }}
        source={require("../assets/remove.png")}
      />
      <Text style={styles.settext}>
        <Text style={styles.text1}>Score </Text>
        <Text style={styles.text2}>Board</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
  },
  settext: {
    marginTop: "5%",
  },
  text1: {
    marginTop: "30%",
    fontSize: 40,
    color: "#ffce08",
  },
  text2: {
    marginTop: "30%",
    fontSize: 40,
    color: "white",
  },
});
