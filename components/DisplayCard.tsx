import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const DisplayCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardTextContainer}>
        <View>
          <Text style={[styles.cardText, styles.cardNumber]}>
            4234 4444 5555 7777
          </Text>
          <Text style={[styles.cardText, styles.cardName]}>Michele Jack</Text>
        </View>
        <View>
          <Text style={[styles.cardText, styles.cardTitle]}>
            System Information
          </Text>
          <Text style={[styles.cardText, styles.cardInfo]}>IPK 3.8</Text>
        </View>
      </View>
      <View style={styles.cardImageContainer}>
        <Image
          source={{
            uri: "https://i.pinimg.com/originals/5d/55/ad/5d55ad96ac2aa22a70f081fe83dfb41c.png",
          }}
          style={styles.iconImage}
        />
        <View style={styles.balanceContainer}>
          <Text style={styles.cardBalance}>87 INR</Text>
        </View>
      </View>
    </View>
  );
};

export default DisplayCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#494AE2",
    height: 150,
    width: "auto",
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 20,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconImage: {
    height: 80,
    width: 80,
  },
  cardTextContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  cardText: {
    color: "white",
  },
  cardNumber: {
    fontSize: 14,
  },
  cardName: {
    fontSize: 23,
    fontWeight: "bold",
  },
  cardTitle: {
    fontSize: 14,
  },
  cardInfo: {
    fontSize: 16,
    fontWeight: "bold",
  },
  cardImageContainer: {
    justifyContent: "space-between",
  },
  balanceContainer: {
    backgroundColor: "#fff",
    height: 20,
    width: 50,
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginLeft: 15,
  },
  cardBalance: {
    color: "#494AE2",
    fontSize: 15,
    fontWeight: "900",
  },
});
