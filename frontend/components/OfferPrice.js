import React, { useState } from "react";
import images from "../images";
import { Appbar, List ,Portal ,Modal } from "react-native-paper";
import { View, StyleSheet, Image, Text,TextInput } from "react-native";
import { Button } from "@rneui/themed";
import AsyncStorage from "@react-native-async-storage/async-storage";
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

const OfferPrice = ({transaction,openEditPrice,setOpenEditPrice}) => {
  //neeed farmer id , name , dealer id , city , quantity , crop name , crop register id , saara crop register object

  //   const openSetPrice = () => {};
  const [error, setError] = useState(null);
  const { transactionCreator, transactionCreating } = useCreateTransaction();
  

  const containerStyle = { backgroundColor: "white", padding: 20 };
  // const [openEditPrice, setOpenEditPrice] = useState(false);
  const [offerPrice, setOfferPrice] = useState("");

  const handleSubmit = async () => {
    if (offerPrice < transaction.price) {
      setError("Price must be greater than msp");
    }

    const updatedTransaction = {
      ...transaction,
      price: offerPrice,
    };

    const response = await transactionCreator(transaction);
    console.log(response);
    setOpenEditPrice(false);
  };

  //handle changes for reject remove offer from list

  // const {name}=name;
  // const {crop}=crop;
  // const {quantity} = quantity;
  // const {city}=city;
  // const [currID, setCurrID] = useState("");
  // const currDealer = await AsyncStorage.getItem("id");
  // const currFarmer = await AsyncStorage.getItem("id");
  return (
    <Portal>
      <Modal
        style={{ alignItems: "center" }}
        visible={openEditPrice}
        contentContainerStyle={containerStyle}
        onDismiss={() => setOpenEditPrice(false)}
      >
        {error && <Text style={{ color: "red" }}>Error: {error}</Text>}
        <Text variant="headlineSmall">Offer Price</Text>
        <View style={{ marginVertical: 8 }}>
          <TextInput
            value={offerPrice}
            onChangeText={(txt) => setOfferPrice(txt)}
            style={{
              ...globalStyles.textInput,
              backgroundColor: "#C5F5C2",
            }}
          />
        </View>
        <Button
          title="Submit"
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
          onPress={() => handleSubmit()}
        />
      </Modal>
    </Portal>
  );
};

export default OfferPrice;
