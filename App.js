import {View } from "react-native"
import 'react-native-gesture-handler';
import Screen1 from "./Components/Screen1.js"
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Screen2 from "./Components/Screen2.js";
import Screen3 from "./Components/Screen3.js";
import Login from "./Components/Login.js";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// const Stack = createNativeStackNavigator();       // For Stack Navigation
// const Tab = createMaterialTopTabNavigator();      // For Tab Navigation
const tab = createBottomTabNavigator();


const App = () =>{
    return(
        
        <NavigationContainer>
            
            {/* This for stack navigation */}

            {/* <Stack.Navigator initialRouteName="Home">                                             
                <Stack.Screen name="Home" options={{headerShown:false}} component={Screen1}/>
                <Stack.Screen name="scren2" options={{headerShown:false}} component={Screen2}/>
            </Stack.Navigator> */}







            {/* This is for top tab Navigation */}

            {/* <Tab.Navigator screenOptions={{
                tabBarStyle:{backgroundColor:"royalblue"},
                tabBarIndicatorStyle:{backgroundColor:"white"},
                tabBarLabelStyle:{color:"white",fontWeight:"bold",fontSize:15}
            }}>
                <Tab.Screen name="Home" component={Screen1}/>
                <Tab.Screen options={{title:"Other"}} name="screen2" component={Screen2}/>
                <Tab.Screen options={{title:"Other"}} name="screen4" component={Screen1}/>
                <Tab.Screen options={{title:"Other"}} name="screen3" component={Screen3}/>
                <Tab.Screen options={{title:"Login"}} name="login" component={Login}/>
            </Tab.Navigator> */}








            {/* This is For Bottom Tab Navigation */}

            <tab.Navigator screenOptions={
                {headerShown:false,
                tabBarStyle:{
                    backgroundColor:"white",
                    shadowColor:"#0C38F3"
                },

                }} initialRouteName="Login">
                <tab.Screen name="Home" component={Screen1}/>
                <tab.Screen name="Login" component={Login}/>
            </tab.Navigator>

            
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
