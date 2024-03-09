import React, { useEffect, useState } from "react";
import images from "../images";
import globalStyles from "../globals";
import imageStyles from "../imagestyles";
import { View, StyleSheet } from "react-native";
import { FAB, Modal, Portal, Text, List, TextInput } from "react-native-paper";
import { Navbar } from "../components";
import { checkLoggedIn } from "../utils";
import { Storage } from "./../components"

const DealerDashboard = ({ navigation }) => {
  const containerStyle = { backgroundColor: "white", padding: 20 };
  useEffect(() => {
    checkLoggedIn(navigation);
  }, []);
//   const [open, setOpen] = useState(false);
  return (
    <View style={{}}>
        <Storage/>
      {/* <Navbar />
      <Portal>
        <Modal
          style={{ alignItems: "center" }}
          visible={open}
          contentContainerStyle={containerStyle}
          onDismiss={() => setOpen(false)}
        >
          <Text variant="headlineSmall">Add crop for sale</Text>
          <View>
            <Text style={globalStyles.formLabels}>Crop</Text>
            <TextInput style={{ backgroundColor: "#C5F5C2" }} />
          </View>
          <View>
            <Text style={globalStyles.formLabels}>Crop</Text>
            <TextInput style={{ backgroundColor: "#C5F5C2" }} />
          </View>
          <View>
            <Text style={globalStyles.formLabels}>Wuantity</Text>
            <TextInput style={{ backgroundColor: "#C5F5C2" }} />
          </View>
          <View>
            <Text style={globalStyles.formLabels}>Date of harvest</Text>
            <TextInput style={{ backgroundColor: "#C5F5C2" }} />
          </View>
          <View>
            <Text style={globalStyles.formLabels}>Send to</Text>
            <TextInput style={{ backgroundColor: "#C5F5C2" }} />
          </View>
        </Modal>
      </Portal>
      <FAB
        icon="plus"
        label="List crop"
        style={styles.fab}
        onPress={() => setOpen(true)}
      /> */}
    </View>
  );
};

export default DealerDashboard

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    top: 780,
    left: 316,
  },
});
