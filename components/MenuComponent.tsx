import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

const MenuComponent = () => {
  const menudata = [
    {
      id: 1,
      icon: "calendar",
      name: "Calendar",
      color: "#8484FF",
    },
    {
      id: 2,
      icon: "whatsapp",
      name: "Whatsapp",
      color: "green",
    },
    {
      id: 3,
      icon: "facebook",
      name: "Facebook",
      color: "#0866FF",
    },
    {
      id: 4,
      icon: "instagram",
      name: "Instagram",
      color: "red",
    },
    {
      id: 5,
      icon: "snapchat",
      name: "Snapchat",
      color: "#FFFC00",
    },
    {
      id: 6,
      icon: "dropbox",
      name: "Dropbox",
      color: "#0061FE",
    },
    {
      id: 7,
      icon: "twitter",
      name: "Twitter",
      color: "#1DA1F2",
    },
    {
      id: 8,
      icon: "mixcloud",
      name: "MixCloud",
      color: "#FF5500",
    },
  ];
  return (
    <View>
      <Text style={styles.cardTitle}>Menu Informations</Text>
      <View style={styles.cardContainer}>
        {menudata.map((item) => {
          return (
            <View key={item?.id} style={styles.card}>
              <Icon name={item?.icon} size={20} color={item?.color} />
              <Text style={styles.cardLabel}>{item?.name}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default MenuComponent;

const styles = StyleSheet.create({
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  card: {
    height: 70,
    width: 70,
    margin: 5,
    backgroundColor: "#fff",
    elevation: 1,
    borderRadius: 10,
    borderColor: "red",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  cardLabel: {
    marginTop: 5,
    fontSize: 12,
  },
});
