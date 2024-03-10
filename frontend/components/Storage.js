import React from "react";
import images from "../images";
import { Appbar, List } from "react-native-paper";
import { View, StyleSheet, Image, Text } from "react-native";

export default function Storage() {
  return (
    <View
      style={{
        backgroundColor: "#C5F5C2",
        width: 405,
        height: 140,
        borderRadius: 8,
        display: "flex",
        gap: 20,
        alignItems: "center",
      }}
    >
      <View>
        <Text>Your storage available</Text>
      </View>
      <Image source={images["greenbar"]} style={stoStyles.bar} />
      <View style={{ flex: 1, gap: 20, flexDirection: "row" }}>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Image source={images["ellispe"]} style={stoStyles.logo} />
          <Text>Storage used: 25Qt</Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Image source={images["ellispe"]} style={stoStyles.logo} />
          <Text>Storage in deal: 50Qt</Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          gap: 20,
          justifyItems: "space-between",
          flexDirection: "row",
        }}
      >
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Image source={images["ellispe"]} style={stoStyles.logo} />
          <Text>Free storage : 25Qt</Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Image source={images["ellispe"]} style={stoStyles.logo} />
          <Text>Total storage : 100Qt</Text>
        </View>
      </View>
    </View>
  );
}
const stoStyles = StyleSheet.create({
  logo: {
    width: 16,
    height: 16,
  },
  bar: {
    width: 350,
    height: 10,
    display: "flex",
    alignItems: "center",
    borderRadius: 20,
  },
});
