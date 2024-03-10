import React,{useState} from "react";
import images from "../images";
import { Appbar, List } from "react-native-paper";
import { View, StyleSheet, Image, Text } from "react-native";
import { Button } from "@rneui/themed";
import AsyncStorage from "@react-native-async-storage/async-storage";
import globalStyles from '../globals';
import { useCreateTransaction, useTransactionsFarmer, useTransactionsAll } from '../hooks/transaction'


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

const Card = ({ name, crop, quantity, city, id, farmerId }) => {

    //neeed farmer id , name , dealer id , city , quantity , crop name , crop register id , saara crop register object

    const openSetPrice=() => {  

    }
    const [openEditPrice,setOpenEditPrice]=useState(false);

    const handleAccept=()=>{


        // // transaction mei city chhaiye
        // const currDealer= await AsyncStorage.getItem("Id");
        // const dealerType= await AsyncStorage.getItem("dealer_type");
        // const transaction={
        //     'farmer':farmerId,
        //     'city':city,
        //     'dealer':currDealer,
        //     'status': 'waiting_for_farmer',
        //     'price':,
        //     'crop_register':,
        // }
        // if(dealer_type=='private'){
        //     setOpenEditPrice(true);
        //     //show Edit Price component with passing transaction object
        //     //dont need to go down 
        // }
        
        // const response = await useTransactionCreator(transaction);
        // console.log(response);


    }
    //handle changes for reject remove offer from list

  // const {name}=name;
  // const {crop}=crop;
  // const {quantity} = quantity;
  // const {city}=city;
  // const [currID, setCurrID] = useState("");
  // const currDealer = await AsyncStorage.getItem("id");
  // const currFarmer = await AsyncStorage.getItem("id");
  return (
    <View
      style={{
        backgroundColor: "#C5F5C2",
        width: 405,
        height: 167,
        borderRadius: 8,
        display: "flex",
        padding: 20,

        // alignItems: "flex-start",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ display: "flex", gap: 8 }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              gap: 8,
            }}
          >
            <Image source={images["photo"]} style={stoStyles.photo} />
            <Text>{name}name</Text>
          </View>

          <Text>
            Quantity-:{quantity} kg {crop}
          </Text>
          <Text>MSP:</Text>
        </View>

        <View>
          <Text>{city}city</Text>
          {/* <Text>You pay:Rs </Text> */}
        </View>
      </View>
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
          }}
          titleStyle={{ color: "white" }}
        />

        <Button
          title="Accept"
          buttonStyle={{ backgroundColor: "rgba(127, 220, 103, 1)" }}
          containerStyle={{
            height: 40,
            width: 80,
            marginHorizontal: 30,
            marginVertical: 10,
          }}
          titleStyle={{
            color: "white",
          }}
          onPress={handleAccept}
        />
      </View>
    </View>
  );
};

export default Card;
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
