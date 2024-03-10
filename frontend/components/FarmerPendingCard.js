import { View, Image } from "react-native"
import images from "../images"
import { Card, Text, Button } from 'react-native-paper'


export default function FarmerPendingCard({ deal, handlePending }) {
    const {id, dealer, farmer, crop_register, price, status, deal_Date, created_at, delivery_date } = deal;
    return (
        <Card
            key={id}
            style={{ backgroundColor: "#C5F5C2", width: "80%", marginBottom: 16 }}
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
                    <Text>{dealer.username}</Text>
                </View>
                <Text variant="bodyMedium">{crop_register.farmer_city}</Text>
            </Card.Content>
            <Card.Content
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingHorizontal: 0,
                }}
            >
                <Card.Content style={{ paddingLeft: 10, gap: 10 }}>
                    <Text variant="bodyMedium">{crop_register.quantity} : {crop_register.name}</Text>
                </Card.Content>
                <Text variant="bodyMedium" style={{ color: "#128100" }}>
                    You get : {price * crop_register.quantity}
                </Text>
            </Card.Content>
            <View
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                }}
            >
                <Button
                    style={{
                        backgroundColor: "rgba(214, 61, 57, 1)",
                        height: 40,
                        width: 80,
                        marginHorizontal: 30,
                        marginVertical: 10,
                        borderRadius: 10,
                        color: "white",
                    }}
                    onPress={() => 
                        //tragic code
                        handlePending(id, dealer, farmer, crop_register, price, "rejected", deal_Date, created_at, delivery_date)
                    }
                >Reject</Button>

                <Button
                    style={{
                        backgroundColor: "rgba(127, 220, 103, 1)",
                        height: 40,
                        width: 80,
                        marginHorizontal: 30,
                        marginVertical: 10,
                        borderRadius: 10,
                        color: "white",
                    }}
                    onPress={() => handlePending(id, dealer, farmer, crop_register, price, "deal_done", deal_Date, created_at, delivery_date)
                }
                >Accept</Button>
            </View>
        </Card>
    )
}