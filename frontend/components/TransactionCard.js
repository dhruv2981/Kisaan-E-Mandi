import React, { useState, useEffect } from "react";
import images from "../images";
import { Appbar, List, Card,Chip } from "react-native-paper";
import { View, StyleSheet, Image, Text } from "react-native";
import { Button } from "@rneui/themed";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { OfferPrice } from ".";
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

const TransactionCard = ({ deal,statusColor,statusDisplay }) => {
  
//   const { farmer, id } = listing;
//   const { transactionCreator, transactionCreating } = useCreateTransaction();

  const openSetPrice = () => {};
  const [openEditPrice, setOpenEditPrice] = useState(false);
  const [transaction, setTransaction] = useState("");
  const [currId, setCurrId] = useState("");
  const [dealerType, setDealerType] = useState("");
  console.log("hi trnsaction");

  

//   const handleAccept = async (farmer, id, msp) => {
//     // const currDealer= await AsyncStorage.getItem("Id");
//     const dealerType = await AsyncStorage.getItem("dealer_type");
//     console.log("fwrefwefew", listing);
//     console.log(farmer, id, msp, currId);
//     const transaction = {
//       farmer: farmer,
//       dealer: parseInt(currId),
//       status: "waiting_for_farmer",
//       price: msp,
//       crop_register: id,
//     };

//     if (dealerType == "private") {
//       console.log("jaea");
//       setTransaction(transaction);
//       setOpenEditPrice(true);
//       return;
//     }
//     console.log("jaa");
//     const response = await transactionCreator(transaction);
//     console.log(response);
//   };

  useEffect(() => {
    (async () => {
      const currId = await AsyncStorage.getItem("id");
      const dealerType = await AsyncStorage.getItem("dealer_type");
      setCurrId(currId);
      setDealerType(dealerType);
    })();
  }, []);

  return (
    <Card key={deal.id} style={{ ...styles.cards, paddingHorizontal: 0 }}>
      <Card.Content
        style={{
          marginBottom: 8,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginLeft: -16,
        }}
      >
        <Card.Content style={{ flexDirection: "row" }}>
          <Image source={images["profile"]} style={styles.pfp} />
          <Text variant="titleMedium">{deal.dealer.username}</Text>
        </Card.Content>
        <Text variant="titleSmall">{deal.crop_register.farmer_city} Mandi</Text>
      </Card.Content>
      <Card.Content
        style={{ flexDirection: "row", justifyContent: "space-evenly" }}
      >
        <Card.Content style={{ marginTop: 4 }}>
          <Text variant="titleSmall">
            {deal.crop_register.quantity} {deal.crop_register.name}
          </Text>
          <Text variant="bodyMedium">Offer : {deal.price} per kg</Text>
          <Text></Text>
        </Card.Content>
        <Card.Content>
          <Text
            variant="titleMedium"
            style={{ color: "#128100", marginBottom: 8 }}
          >
            You get : Rs {deal.price * deal.crop_register.quantity}
          </Text>
          <Chip style={{ backgroundColor: statusColor }}>{statusDisplay}</Chip>
        </Card.Content>
      </Card.Content>
    </Card>
  );
};

export default TransactionCard;
const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    top: 780,
    left: 316,
  },
  cards: {
    backgroundColor: "#C5F5C2",
    width: "100%",
    marginBottom: 16,
  },
  pfp: {
    width: 24,
    height: 24,
  },
});
