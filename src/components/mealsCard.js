import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { colors, dimensions } from '../assets/constans';

const MealsCard = ({mealName, mealImg, idMeal}) => {
  
  

  return (
    <TouchableOpacity style={style.mealsContainer}>
      <View >
        <Image style={style.imageMeal} source={{uri:mealImg}}/>
      </View>
       <View style={style.textContainer}>
         <Text style={style.title}>{mealName}</Text>
         <View style={{ flex: 1 }}>
            <Text style={style.description}>Patlıcan musakkanın yapılışı ile ilgili bir takım bilgiler</Text>
         </View>
       </View>
    </TouchableOpacity>
  );
};

export default MealsCard;

const style = StyleSheet.create({
    mealsContainer:{
        backgroundColor: colors.lightGreen,
        height: dimensions.height / 8,
        borderRadius: 15,
        paddingHorizontal: 12,
        marginHorizontal: 12,
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical:6
    },
    imageMeal:{
        borderRadius: 15,
        resizeMode: 'cover',
        width: 70,
        height: 70,
        marginVertical: 12,
    },
    textContainer: {
        marginLeft: 8,
        flex: 1,
        flexDirection: 'column',
        alignItems:'center',
        paddingVertical:8
    },
    title:{
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    description:{
        color: 'white',
    },
});
