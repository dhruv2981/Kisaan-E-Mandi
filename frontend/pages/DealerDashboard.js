import React, { useEffect, useState } from "react";
import images from "../images";
import globalStyles from "../globals";
import imageStyles from "../imagestyles";
import { View, StyleSheet } from "react-native";
import { FAB, Modal, Portal, Text, List, TextInput } from "react-native-paper";
import { checkLoggedIn } from "../utils";
import { Storage ,Card ,Navbar } from "./../components";
import {
  useCreateListing,
  useListingsFarmer,
  useListingsAll,
} from "../hooks/listing";

const DealerDashboard = ({ navigation }) => {
  const containerStyle = { backgroundColor: "white", padding: 20 };
  const [currName, setCurrName] = useState("");
  const [currID, setCurrID] = useState("");
  //  const { crops, error, isLoading } = useCrops();
  //  const { listingCreator, listingCreating } = useCreateListing();
  const { listings } = useListingsAll();
  //  console.log(listings);
  useEffect(() => {
    (async () => {
      const { username, id } = await checkLoggedIn(navigation);
      setCurrName(username);
      setCurrID(id);
    })();
  }, []);
  //  const [open, setOpen] = useState(false);
  //  const [crop, setCrop] = useState("");
  //  const [quantity, setQuantity] = useState("");
  //  const [recipient, setRecipient] = useState("");
  return (
    <View style={{ display: "flex" }}>
      <Navbar />
      <View style={styles.dealer}>
        <Text variant="headlineMedium">Welcome, {currName}</Text>
        <Storage />
        <Text variant="headlineMedium">Farmer's available</Text>
        <Card/>
      </View>
    </View>
  );
};

export default DealerDashboard;

const styles = StyleSheet.create({
  dealer: {
    position: "absolute",
    width: 430,
    height: 937,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    gap: 15,
    top: 65,
  },
});
