import { Text, FlatList, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MealsCard from "../components/mealsCard";
import useFetch from "../hooks/useFetch";
import { useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";

const MealsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { category } = route.params;
  const { words } = route.params;
  const { data, error, loading } = useFetch(
    `filter.php?c=${category}`,
    "meals"
  );

  const [wordData, setWordData] = useState([])
  
  const datata = "https://www.themealdb.com/api/json/v1/1/search.php?f=";
  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(`${datata}${words}`);
      if (response.data.meals === null) {
        navigation.navigate('Empty');
      } else {
        setWordData(response.data.meals);
      }
    } catch (err) {
      console.error(err);
      navigation.navigate('Fail');
    }
  }, [datata, navigation, words]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  
  const handleMealPress = (idMeal) => {
    console.warn(idMeal)
    
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
       {category ?  <Text style={{ fontSize: 22, fontWeight: "bold" }}>{category}</Text> : <Text style={{ fontSize: 22, fontWeight: "bold" }}>OOOOOO</Text>}
      </View>
      {loading ? (
        <Text>Loading...</Text>
      ) : error ? (
        <Text>Error: {error}</Text>
      ) : (
        <FlatList
          data={category ? data : wordData }
          renderItem={renderMealItem}
          keyExtractor={(item) => item.idMeal}
        />
      )}
    </SafeAreaView>
  );
};

export default MealsScreen;
