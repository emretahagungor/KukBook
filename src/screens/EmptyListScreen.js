import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../assets/constans";
import { useNavigation } from "@react-navigation/native";

const EmptyListScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Sorry, we can't find this food :(</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Go Back to Home Page!</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default EmptyListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.orange,
  },
  button: {
    backgroundColor: "white",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 16,
    borderColor: colors.green,
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 18,
    color: colors.green,
    fontWeight: "bold",
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 0.2,
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 0.7,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 86,
    color: "white",
    fontWeight: "900",
  },
});
