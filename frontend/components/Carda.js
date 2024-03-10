import React, { useState,useEffect } from "react";
import images from "../images";
import { Appbar, List, Card } from "react-native-paper";
import { View, StyleSheet, Image, Text } from "react-native";
import { Button } from "@rneui/themed";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { OfferPrice } from "./index.js";
import globalStyles from "../globals";
import {
  useCreateTransaction,
  useTransactionsFarmer,
  useTransactionsAll,
} from "../hooks/transaction";

// const EditPrice=({transaction})=>{

//     //wamt price from it
//     //need msp as input from card , trnsation objevt

//     const price,setPrice=useState("");
//     const msp=transaction['price'];
//     const [error, setError] = useState(null);
//     const onSubmit=()=>{
//         if(price <transaction['price']){
//             setError("Price must be greater than msp");
//         }

//          const updatedTransaction = {
//             ...transaction,
//             price: price,
//             // Any other properties you want to update
//         };

//         const response = await useTransactionCreator(transaction);
//         console.log(response);
//     }

//     return (
//         <View style={{display:'flex'}}>
//         <View style={globalStyles.formField}>
//                     {error && <Text>Error: {error}</Text>}
//                     <Text style={globalStyles.formLabels}>Price  Msp-:{msp}</Text>
//                     <TextInput style={globalStyles.textInput} mode='outlined' value={price} onChangeText={(txt) => setPrice(txt)} />
//         </View>
//         <View style={{alignSelf:'flex-end'}}>
//        <Button
//           title="Accept"
//           buttonStyle={{ backgroundColor: "rgba(127, 220, 103, 1)" }}
//           containerStyle={{
//             height: 40,
//             width: 80,
//             marginHorizontal: 30,
//             marginVertical: 10,
//           }}
//           titleStyle={{
//             color: "white",
//           }}
//           onClick={onSubmit}
//         />
//         </View>
//         </View>
//     );
// }

const Carda = ({ listing, msp }) => {
  console.log("lsitindscfwawed", listing);
  const {farmer,id} = listing;
  const {transactionCreator, transactionCreating} = useCreateTransaction();

  const openSetPrice = () => {};
  const [openEditPrice, setOpenEditPrice] = useState(false);
  const [transaction, setTransaction] = useState("");
  const [currId, setCurrId] = useState("");
  const [display, setDisplay] = useState(true)
  const [dealerType, setDealerType] = useState("")




  const handleAccept = async (farmer,id, msp) => {
    // const currDealer= await AsyncStorage.getItem("Id");
    const dealerType = await AsyncStorage.getItem("dealer_type");
    console.log("fwrefwefew", listing);
    console.log(farmer,id,msp,currId);
    const transaction = {
      farmer: farmer,
      dealer: parseInt(currId),
      status: "waiting_for_farmer",
      price: msp,
      crop_register: id,
    };

    if (dealerType == "private") {
      console.log("jaea");
      setTransaction(transaction);
      setOpenEditPrice(true);
      return;
    }
    console.log("jaa")
    const response = await transactionCreator(transaction);
    console.log(response);
    setDisplay(false)
  };

  useEffect(() => {
    (async () => {
      const currId = await AsyncStorage.getItem("id");
      const dealerType= await AsyncStorage.getItem("dealer_type");
      setCurrId(currId);
      setDealerType(dealerType);
    })();
  }, []);

  return (
    <Card
      key={listing.id} 
      style={{ backgroundColor: "#C5F5C2", width: 360, marginBottom: 16, display : display ? "block" : "none"}}
    >
      <Card.Content
        style={{ flexDirection: "row", justifyContent: "space-between" }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            gap: 8,
          }}
        >
          <Image
            source={images["photo"]}
            style={{
              width: 30,
              height: 30,
            }}
          />
          <Text>{listing.farmer_name}</Text>
        </View>
        <Text variant="bodyMedium">{listing.farmer_city}</Text>
      </Card.Content>
      <Card.Content
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 0,
        }}
      >
        <Card.Content style={{ paddingLeft: 10, gap: 10 }}>
          <Text variant="bodyMedium">
            Quantity : {listing.quantity} {listing.name}
          </Text>
          <Text variant="bodySmall">MSP : {msp} rupees per kg</Text>
        </Card.Content>
        <Text variant="bodyMedium" style={{ color: "#128100" }}>
          By MSP : Rs {msp * listing.quantity}
        </Text>
      </Card.Content>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Button
          title="Reject"
          buttonStyle={{ backgroundColor: "rgba(214, 61, 57, 1)" }}
          containerStyle={{
            height: 40,
            width: 80,
            marginHorizontal: 30,
            marginVertical: 10,
            borderRadius: 10,
          }}
          titleStyle={{ color: "white" }}
          onPress={() => setDisplay(false)}
        />

        <Button
          title="Accept"
          buttonStyle={{ backgroundColor: "rgba(127, 220, 103, 1)" }}
          containerStyle={{
            height: 40,
            width: 80,
            marginHorizontal: 30,
            marginVertical: 10,
            borderRadius: 10,
          }}
          titleStyle={{
            color: "white",
          }}
          onPress={() => handleAccept(farmer, id, msp )}
        />
      </View>
      <OfferPrice transaction={transaction} openEditPrice={openEditPrice} setOpenEditPrice={setOpenEditPrice} />
    </Card>
  );
};

export default Carda;
const stoStyles = StyleSheet.create({
  photo: {
    width: 30,
    height: 30,
  },
  bar: {
    width: 350,
    height: 10,
    display: "flex",
    alignItems: "center",
    borderRadius: 20,
  },
});
