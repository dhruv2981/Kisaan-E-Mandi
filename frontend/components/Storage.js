import React from "react";
import images from "../images";
import { Appbar, List } from "react-native-paper";
import { View, StyleSheet, Image } from "react-native";

export default function Storage() {
  return (
    <View styles={stoStyles.storage}>
        <Text ></Text>
    </View>
     
  );
}
const stoStyles = StyleSheet.create({
  storage: {
    width: 405,
    height: 167,
    top: 104,
    left: 13,
    borderRadius: 8,
    color:C5F5C2,
  },
  logo: {
    position: "absolute",
    top: 4,
    left: 55,
    width: 128,
    height: 46,
  },
  profile: {
    position: "absolute",
    width: 40,
    height: 40,
    top: 7,
    left: 374,
  },
});
