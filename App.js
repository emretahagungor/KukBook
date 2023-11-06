import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from './src/screens/HomeScreen'
import ItemDetailScreen from './src/screens/ItemDetailScreen'
import MealsScreen from './src/screens/MealsScreen'
import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer'
import EmptyListScreen from './src/screens/EmptyListScreen'



export default function App() {


  const Drawer = createDrawerNavigator();
  function MyDrawer() {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Feed" component={Feed} />
        <Drawer.Screen name="Article" component={Article} />
      </Drawer.Navigator>
    );
  }


  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Meals' component={MealsScreen} />
        <Stack.Screen name='Detail' component={ItemDetailScreen} />
        <Stack.Screen name='Empty' component={EmptyListScreen}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
