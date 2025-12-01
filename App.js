import {View } from "react-native"
import Screen1 from "./Components/Screen1.js"
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screen2 from "./Components/Screen2.js";

const Stack = createNativeStackNavigator();


const App = () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" options={{headerShown:false}} component={Screen1}/>
                <Stack.Screen name="scren2" options={{headerShown:false}} component={Screen2}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
    
}

export default App;

const sty = StyleSheet.create({
    body:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"royalblue"
    }
})
