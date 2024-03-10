import React, { useEffect, useState } from "react";
import images from "../images";
import globalStyles from "../globals";
import { useCrops } from "../hooks/crops";
import imageStyles from "../imagestyles";
import { Button } from "@rneui/themed";
import { View, ScrollView, StyleSheet, Image } from "react-native";
import { FAB, Modal, Portal, Text, List, TextInput } from "react-native-paper";
import { checkLoggedIn } from "../utils";
import { Storage, Navbar, Carda, TransactionCard } from "./../components";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  useCreateListing,
  useListingsFarmer,
  useListingsAll,
} from "../hooks/listing";
import {
  useCreateTransaction,
  useUpdateTransaction,
  useTransactions,
} from "../hooks/transaction";

const DealerDashboard = ({ navigation }) => {
  const containerStyle = { backgroundColor: "white", padding: 20 };
  const [currName, setCurrName] = useState("");
  const [currID, setCurrID] = useState("");
  const [currCity, setCurrCity] = useState("");
  const { crops, error, isLoading } = useCrops();
  const [openEditPrice, setOpenEditPrice] = useState(false);
  const {
    transactions,
    error: transError,
    isLoading: transLoading,
  } = useTransactions();

  //   const currCity = await AsyncStorage.getItem("city");

  //   const { listingCreator, listingCreating } = useCreateListing();
  const { listings } = useListingsAll();

  const farmerDoneDeals =
    currID != "" &&
    transactions &&
    transactions.filter((trans) => {
      //exploits the fact that status has only 6 possible states
      console.log(`id is : ${currID}`);
      console.log(trans.dealer.id);
      console.log(trans.status);
      return (
        trans.dealer.id === currID &&
        (trans.status === "deal_done" ||
          trans.status === "delivered" ||
          trans.status === "payment_done")
      );
    });
    console.log(farmerDoneDeals);

  const dealerListings =
    listings && listings.filter((listing) => listing.farmer_city === currCity);
  console.log("sfdgrfhtgj", dealerListings);

  useEffect(() => {
    (async () => {
      const { username, id } = await checkLoggedIn(navigation);
      setCurrName(username);
      setCurrID(id);
      const city = await AsyncStorage.getItem("city");
      console.log(city);
      setCurrCity(city);
    })();
  }, []);
  //  const [open, setOpen] = useState(false);
  //  const [crop, setCrop] = useState("");
  //  const [quantity, setQuantity] = useState("");
  //  const [recipient, setRecipient] = useState("");
  return (
    <ScrollView style={{ display: "flex" }}>
      <Navbar />
      <View style={styles.dealer}>
        <Text variant="headlineMedium">Welcome, {currName}</Text>
        <Storage />
        <View style={{ padding: 16 }}>
          <Text variant="headlineMedium">Farmer's available</Text>
          <View style={{ alignItems: "center", width: "100%", marginTop: 16 }}>
            {dealerListings &&
              dealerListings.map((listing) => {
                let msp = 0;
                // Find the crop from the crops list that matches the current listing's name
                const matchedCrop =
                  crops && crops.find((crop) => crop.name === listing.name);
                // If a matching crop is found, assign its MSP to cropMSP
                if (matchedCrop) {
                  msp = matchedCrop.msp;
                  return <Carda listing={listing} msp={msp} />;
                }
              })}
          </View>
        </View>
        <View style={{ padding: 16 }}>
          <Text variant="headlineMedium">Ongoing deals</Text>
          <View style={{ alignItems: "center", width: "100%", marginTop: 16 }}>
            {farmerDoneDeals &&
              farmerDoneDeals.map((deal, index) => {
                let statusDisplay = "";
                let statusColor = "";

                if (deal.status === "deal_done") {
                  statusDisplay = "To be delivered";
                  statusColor = "#128100";
                } else if (deal.status === "delivered") {
                  statusDisplay = "Delivered";
                  statusColor = "#128100";
                } else if (deal.status === "payment_done") {
                  statusDisplay = "Payment Done";
                  statusColor = "#B4B800";
                }
               

                return (
                  <TransactionCard
                    deal={deal}
                    statusDisplay={statusDisplay}
                    statusColor={statusColor}
                  />
                );
              })}
          </View>
        </View>
      </View>
    </ScrollView>
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
