import { Text, FlatList, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MealsCard from "../components/mealsCard";
import useFetch from "../hooks/useFetch";
import { useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";

const MealsScreen = () => {
  const route = useRoute();
  const { category } = route.params;
  const { words } = route.params;
  const { data, error, loading } = useFetch(
    `filter.php?c=${category}`,
    "meals"
  );
  const datata = "http://www.themealdb.com/api/json/v1/1/search.php?f=";
  useEffect(() => {
    axios
      .get(`${datata}${words}`)
      .then((res) => console.warn(res.data))
      .catch((err) => console.error(err));
  }, []);

  console.error(`${datata}${words}`)

  const navigation = useNavigation();

  const handleMealPress = (idMeal) => {
    return navigation.navigate("Detail", { id:idMeal });
  };

  const renderMealItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => handleMealPress(item.idMeal)}>
        <MealsCard
          idMeal={item.idMeal}
          mealImg={item.strMealThumb}
          mealName={item.strMeal}
        />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          paddingVertical: 12,
        }}
      >
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>{category}</Text>
      </View>
      {loading ? (
        <Text>Loading...</Text>
      ) : error ? (
        <Text>Error: {error}</Text>
      ) : (
        <FlatList
          data={data}
          renderItem={renderMealItem}
          keyExtractor={(item) => item.idMeal}
        />
      )}
    </SafeAreaView>
  );
};

export default MealsScreen;
