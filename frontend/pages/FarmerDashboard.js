import React, { useEffect, useState } from 'react'
import images from '../images'
import globalStyles from '../globals'
import imageStyles from '../imagestyles'
import { View, StyleSheet, Image } from 'react-native'
import { FAB, Modal, Portal, Text, SegmentedButtons, TextInput, Button, Card, Menu, Chip } from 'react-native-paper'
import { Navbar } from '../components'
import FarmerPendingCard from '../components/FarmerPendingCard'
import { checkLoggedIn } from '../utils'
import { useCreateListing, useListingsFarmer, useListingsAll } from '../hooks/listing'
import { useTransactions, useUpdateTransaction } from '../hooks/transaction'
import { useCrops } from '../hooks/crops'
import AsyncStorage from '@react-native-async-storage/async-storage';


const FarmerDashboard = ({ navigation, route }) => {
  console.log(navigation)
  const containerStyle = { backgroundColor: 'white', padding: 20 };
  const [currName, setCurrName] = useState("")
  const [selectedList, setSelectedList] = useState("Dashboard")
  const [currID, setCurrID] = useState("")
  const { crops, error, isLoading } = useCrops()
  const { transactions, error: transError, isLoading: transLoading } = useTransactions()
  const { listingCreator, listingCreating } = useCreateListing();
  const {transactionUpdating, transactionUpdater} = useUpdateTransaction()
  const { listings } = useListingsAll();
  useEffect(() => {
    (async () => {
      const { username, id } = await checkLoggedIn(navigation)
      setCurrName(username)
      setCurrID(id)
    })()
  }, [])
  const [open, setOpen] = useState(false)
  const [crop, setCrop] = useState("")
  const [quantity, setQuantity] = useState("")
  const [recipient, setRecipient] = useState("")
  const handlePending = async (id, dealer, farmer, crop_register, price, status, deal_Date, created_at, delivery_date) => {
    try {
      const response = await transactionUpdater({id : id, dealer : dealer, farmer : farmer, crop_register : crop_register, price : price, status : status, deal_Date : deal_Date, delivery_date : delivery_date, created_at : created_at})
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }
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
        const response = await listingCreator({ farmer: currFarmer, quantity: quantity, name: crop, dealer_type: recipient, farmer_name: currFarmerName, farmer_city: currCity });
        console.log(response)
        setOpen(false)
      }
      catch (error) {
        console.log(error)
      }
    }
  }
  //filter listings for the ones made by current farmer
  const farmerListings = listings && listings.filter((listing) => listing.farmer === currID)
  const farmerPendingDeals = currID != "" && transactions && transactions.filter((trans) => {
    return trans.farmer.id === currID && trans.status === "waiting_for_farmer"
  })

  const farmerDoneDeals = currID != "" && transactions && transactions.filter((trans) => {
    //exploits the fact that status has only 6 possible states
    console.log(`id is : ${currID}`)
    console.log(trans.farmer.id)
    console.log(trans.status)
    return trans.farmer.id === currID && (trans.status === "deal_done" || trans.status === "delivered" || trans.status === "payment_done")
  })
  const displayListings = farmerListings && farmerListings.map(listing => {
    let cropMSP
    crops && crops.forEach(crop => {
      if (crop.name === listing.name) {
        cropMSP = crop.msp
      }
    })
    return (
      <Card key={listing.id} style={styles.cards}>
        <Card.Content style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text variant='bodyMedium'>{listing.name}</Text>
          <Text variant="bodyLarge" style={{ color: "#128100" }}>By MSP : Rs {cropMSP * listing.quantity}</Text>
        </Card.Content>
        <Card.Content>
          <Text variant='bodyMedium'>Quantity : {listing.quantity}</Text>
          <Text variant='bodySmall'>MSP  : {cropMSP} rupees per kg</Text>
        </Card.Content>
      </Card>
    )
  })
  const displayDoneDeals = farmerDoneDeals && farmerDoneDeals.map((deal) => {
    let statusDisplay = ""
    let statusColor = ""
    if (deal.status === "deal_done") {
      statusDisplay = "To be delivered"
      statusColor = "#128100"
    }

    if (deal.status === "delivered") {
      statusDisplay = "Delivered"
      statusColor = "#128100"
    }
    if (deal.status === "payment_done") {
      statusDisplay = "Payment Done"
      statusColor = "#B4B800"
    }
    return (
      <Card key={deal.id} style={{...styles.cards,  paddingHorizontal : 0 }}>
        <Card.Content style={{marginBottom : 8, flexDirection: "row", justifyContent: "space-between", alignItems : "center", marginLeft : -16}}>
          <Card.Content style={{ flexDirection: "row" }}>
            <Image source={images["profile"]} style={styles.pfp} />
            <Text variant='titleMedium'>{deal.dealer.username}</Text>
          </Card.Content>
          <Text variant='titleSmall'>{deal.crop_register.farmer_city} Mandi</Text>
        </Card.Content>
        <Card.Content style={{ flexDirection: "row", justifyContent : "space-evenly"}}>
          <Card.Content style={{marginTop : 4}}>
            <Text variant='titleSmall'>{deal.crop_register.quantity} {deal.crop_register.name}</Text>
            <Text variant='bodyMedium'>Offer : {deal.price} per kg</Text>
            <Text></Text>
          </Card.Content>
          <Card.Content>
            <Text variant='titleMedium' style={{ color: "#128100", marginBottom : 8 }}>You get : Rs ${deal.price * deal.crop_register.quantity}</Text>
            <Chip style={{ backgroundColor: statusColor}}>{statusDisplay}</Chip>
          </Card.Content>
        </Card.Content>
      </Card>
    )
  })
  const displayPending = farmerPendingDeals && farmerPendingDeals.map(deal => {
    return (
      <FarmerPendingCard deal={deal} handlePending={handlePending} />
    )
  })
  return (
    <View style={{}}>
      <Navbar navigator={navigation} setSelected={setSelectedList}/>
      <Text variant='headlineMedium' style={{ marginLeft: 8, marginTop: 8 }}>Welcome, {currName}</Text>
      <View style={{ padding: 16 , display : selectedList === "Your crops" || selectedList === "Dashboard" ? "block" : "none"}}>
        <Text variant='headlineSmall' style={{ marginLeft: 8, marginTop: 8 }}>Your crops</Text>
        <View style={{ alignItems: "center", width: "100%", marginTop: 16 }}>
          {displayListings}
        </View>
      </View>
      <View style={{ padding: 16, display : selectedList === "Your deals" || selectedList === "Dashboard" ? "block" : "none" }}>
        <Text variant='headlineSmall' style={{ marginLeft: 8, marginTop: 8 }}>Your deals</Text>
        <View style={{ alignItems: "center", width: "100%", marginTop: 16 }}>
          {displayDoneDeals}
        </View>
      </View>
      <View style={{ padding: 16, display : selectedList === "New/Pending offers" || selectedList === "Dashboard" ? "block" : "none"}}>
        <Text variant='headlineSmall' style={{ marginLeft: 8, marginTop: 8 }}>New/Pending offers</Text>
        <View style={{ alignItems: "center", width: "100%", marginTop: 16 }}>
          {displayPending}
        </View>
      </View>
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
  cards: {
    backgroundColor: "#C5F5C2",
    width: "80%",
    marginBottom: 16
  },
  pfp: {
    width: 24,
    height: 24,
  }
})