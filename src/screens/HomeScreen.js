import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import useFetch from "../hooks/useFetch";
import { colors, dimensions } from "../assets/constans";
import { ScrollView } from "react-native-gesture-handler";

const HomeScreen = () => {
  const [text, setText] = useState("");
  const navigation = useNavigation();
  const [randomMeal, setRandomMeal] = useState([]);
  const [words, setWords] = useState('')
  const { data, error, loading } = useFetch("categories.php", "categories");


  const str = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','r','s','t','u','q','w','v','y','z'];

  const handleWord =(harf) => {
    navigation.navigate('Meals', {words : harf})
  }
  

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => {
        if (res.data && res.data.meals) {
          setRandomMeal(res.data.meals.slice(0, 10));
        }
      })
      .catch((err) => console.log(err));
  }, []);

  if (loading) {
    return <ActivityIndicator size={"large"} />;
  }

  return (

    <SafeAreaView style={styles.container}>
      <View>
      <Text style={{fontSize:22, fontWeight:'900', color:'white', padding:12, marginTop:8, textAlign:'center'}}>~  Welcome to KukBook!  ~</Text>
      </View>
      
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="Write down the food you want to make!"
        style={styles.input}
      />

<View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems:'center', justifyContent:'center', paddingHorizontal:6}}>
      {str.map((harf, index) => (
        <TouchableOpacity
        onPress={()=>handleWord(harf)}
        key={index} style={{ padding: 8,backgroundColor:colors.lightGreen, margin:1, borderBottomEndRadius:10, borderBottomStartRadius:10, }}>
          <Text>{harf.toUpperCase()}</Text>
        </TouchableOpacity>
      ))}
    </View>
      {/* <ScrollView horizontal={true} >
        {randomMeal.map((meal, index) => (
          <TouchableOpacity
            key={index}
            style={styles.mealImageContainer}
          >
            <Image
              style={styles.mealImage}
              source={{ uri: meal.strMealThumb }}
            />
          </TouchableOpacity>
        ))}
      </ScrollView> */}
      <View style={styles.categoriesContainer}>
        <Text style={styles.categoriesTitle}>Categories</Text>
    
        <View style={styles.categories}>
          {data.map((data) => (
            <TouchableOpacity
              key={data.idCategory}
              onPress={() =>
                navigation.navigate("Meals", { category: data.strCategory })
              }
              style={styles.categoryItem}
            >
              <View style={styles.categoryImageContainer}>
                <Image
                  source={{ uri: data.strCategoryThumb }}
                  style={styles.categoryImage}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.categoryText}>{data.strCategory}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: colors.green
  },
  input : {
    backgroundColor:'white',
    borderRadius:30,
    height:55,
    paddingStart:14,
    fontSize:20
  },
  mealImageContainer: {
    borderRadius: 30,
    marginRight: 10,
  },
  mealImage: {
    width: 70,
    height: 70,
  },
  categoriesContainer: {
    backgroundColor:colors.lightGreen,
    alignItems: "center",
    marginVertical: 16,
    borderTopEndRadius:55,
    borderTopStartRadius:55,

    height:dimensions.height,
  
  
  },
  categoriesTitle: {
    fontSize: 30,
    fontWeight: "bold",
  },
  categories: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between", // Kategori blokları arasındaki boşluğu ayarlar
    marginHorizontal: 5, // İki blok arasındaki yatay boşluğu ayarlar
  },
  categoryItem: {
    borderRadius: 20,
    height: 90,
    width: "30%", // 30% genişlik, üç bloğu yan yana sıralar
    backgroundColor: colors.green,
    marginVertical: 8,
  },
  categoryImageContainer: {
    maxHeight:65,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    overflow:'hidden'

  },
  categoryImage: {
    width: '100%', // Resimlerin container'ı tamamen kaplamasını sağlar
    height: '100%', // Resimlerin container'ı tamamen kaplamasını sağlar
    
  },
  categoryText: {
    textAlign: "center",
  },
});

export default HomeScreen;
