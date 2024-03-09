import React, { useEffect, useState } from 'react'
import images from '../images'
import globalStyles from '../globals'
import imageStyles from '../imagestyles'
import { View, StyleSheet } from 'react-native'
import { FAB, Modal, Portal, Text, SegmentedButtons, TextInput, Button } from 'react-native-paper'
import { Navbar } from '../components'
import { checkLoggedIn } from '../utils'
import { useCreateListing, useListingsFarmer, useListingsAll } from '../hooks/listing'
import { useCrops } from '../hooks/crops'
import AsyncStorage from '@react-native-async-storage/async-storage';


const FarmerDashboard = ({ navigation, route }) => {
  const containerStyle = { backgroundColor: 'white', padding: 20 };
  const [currName, setCurrName] = useState("")
  const [currID, setCurrID] = useState("")
  const { crops, error, isLoading } = useCrops()
  const { listingCreator, listingCreating } = useCreateListing();
  const {listings} = useListingsAll();
  console.log(listings)
  useEffect(() => {
    (async () => {
      const {username, id} = await checkLoggedIn(navigation)
      setCurrName(username)
      setCurrID(id)
    })()
  }, [])
  const [open, setOpen] = useState(false)
  const [crop, setCrop] = useState("")
  const [quantity, setQuantity] = useState("")
  const [recipient, setRecipient] = useState("")
  const handleList = async () => {
    if (crop != "" && quantity != "" && recipient != "") {
      try {
        //diff crop against known crops
        console.log(crops)
        let match = false;
        crops.forEach(cropobj => {
          if (cropobj.name === crop) {
            match = true;
          }
        });
        if (!match) {
          //invalid crop
          console.log("Error, invalid crop")
          return;
        }
        const currFarmer = await AsyncStorage.getItem("id")
        const currFarmerName = await AsyncStorage.getItem("username")
        const currCity = await AsyncStorage.getItem("city")
        const response = await listingCreator({ farmer: currFarmer, quantity: quantity, name: crop, dealer_type: recipient, farmer_name : currFarmerName, farmer_city : currCity });
        console.log(response)
        setOpen(false)
      }
      catch (error) {
        console.log(error)
      }
    }
  }
  return (
    <View style={{}}>
      <Navbar />
      <Text variant='headlineMedium'>Welcome, ${currName}</Text>
      <Portal>
        <Modal style={{ alignItems: "center" }} visible={open} contentContainerStyle={containerStyle} onDismiss={() => setOpen(false)}>
          <Text variant='headlineSmall'>Add crop for sale</Text>
          <View style={{ marginVertical: 8 }}>
            <Text style={globalStyles.formLabels}>Crop</Text>
            <TextInput value={crop} onChangeText={(txt) => setCrop(txt)} style={{ ...globalStyles.textInput, backgroundColor: "#C5F5C2" }} />
          </View>
          <View style={{ marginVertical: 8 }}>
            <Text style={globalStyles.formLabels}>Quantity in kg</Text>
            <TextInput value={quantity} onChangeText={(txt) => setQuantity(txt)} style={{ ...globalStyles.textInput, backgroundColor: "#C5F5C2" }} />
          </View>
          <View style={{ marginVertical: 8 }}>
            <SegmentedButtons
              value={recipient}
              onValueChange={(val) => setRecipient(val)}
              buttons={[
                {
                  value: 'p',
                  label: 'Private',
                },
                {
                  value: 'g',
                  label: 'Govt',
                },
                {
                  value: 'b',
                  label: 'Both'
                },
              ]}
            />
          </View>
          <Button mode='contained' width='65%' onPress={handleList}>List</Button>
        </Modal>
      </Portal>
      <FAB icon="plus" label='List crop' style={styles.fab} onPress={() => setOpen(true)} />
    </View>
  )
}

export default FarmerDashboard

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    top: 780,
    left: 316,
  },
})