import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import DisplayCard from "./components/DisplayCard";
import MenuComponent from "./components/MenuComponent";
import Notification from "./components/Notification";

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.headContainer}>
            <Text style={styles.subheading}>Review transactions easily</Text>
            <Text style={styles.headingText}>Card Review</Text>
          </View>
          <View style={styles.logoContainer}>
            <Text style={styles.logo}>L</Text>
          </View>
        </View>
        <DisplayCard />
        <MenuComponent />
        <Notification />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F8FF",
    padding: 20,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headContainer: {},
  subheading: {
    color: "#C2C5F9",
    fontSize: 16,
  },
  headingText: {
    fontSize: 26,
    fontWeight: "900",
    fontFamily: "Ariel",
    color: "#4748E1",
  },
  logoContainer: {
    backgroundColor: "#FFFFFF",
    height: 40,
    width: 40,
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  logo: {
    fontSize: 30,
    fontWeight: "900",
    color: "red",
  },
});
