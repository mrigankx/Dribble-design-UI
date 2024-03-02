import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Notification = () => {
  const notifications = [
    {
      id: 1,
      title: "New card transaction detected",
      desc: "The new transaction is requested from XYZ Comapany of Rs 230.87. Please review this transaction and approve.",
      status: "danger",
    },
    {
      id: 2,
      title: "Payment of Rs 200 received",
      desc: "A new payment of Rs 200 received from YYY user on 1st March, 2024",
      status: "safe",
    },
    {
      id: 3,
      title: "New card transaction detected",
      desc: "The new transaction is requested from XYZ Comapany of Rs 188.7. Please review this transaction and approve.",
      status: "danger",
    },
    {
      id: 4,
      title: "Payment of Rs 150 received",
      desc: "A new payment of Rs 200 received from YYY user on 1st Feb, 2024",
      status: "safe",
    },
  ];
  return (
    <View>
      <Text style={styles.cardTitle}>Notifications</Text>
      {notifications.map((notification) => (
        <View style={styles.notiContainer} key={notification?.id}>
          <View
            style={[
              styles.notiBar,
              {
                backgroundColor:
                  notification?.status === "safe" ? "green" : "red",
              },
            ]}
          ></View>
          <View style={styles.notiTextContainer}>
            <Text style={styles.notiTitle}>{notification?.title}</Text>
            <Text style={styles.notiDesc}>{notification?.desc}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
  },
  notiContainer: {
    height: 80,
    elevation: 2,
    borderRadius: 10,
    backgroundColor: "#fff",
    padding: 15,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  notiBar: {
    height: "auto",
    width: 5,
  },
  notiTextContainer: {
    padding: 1,
    marginLeft: 5,
  },
  notiTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#000",
  },
  notiDesc: {
    fontSize: 12,
  },
});
