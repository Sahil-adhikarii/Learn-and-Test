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

// const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();


const App = () =>{
    return(
        
        <NavigationContainer>
            
            {/* This for stack navigation */}

            {/* <Stack.Navigator initialRouteName="Home">                                             
                <Stack.Screen name="Home" options={{headerShown:false}} component={Screen1}/>
                <Stack.Screen name="scren2" options={{headerShown:false}} component={Screen2}/>
            </Stack.Navigator> */}



            {/* This is for top tab Navigation */}

            <Tab.Navigator screenOptions={{
                tabBarStyle:{backgroundColor:"royalblue"},
                tabBarIndicatorStyle:{backgroundColor:"white"},
                tabBarLabelStyle:{color:"white",fontWeight:"bold",fontSize:15}
            }}>
                <Tab.Screen name="Home" component={Screen1}/>
                <Tab.Screen options={{title:"Other"}} name="screen2" component={Screen2}/>
                <Tab.Screen options={{title:"Other"}} name="screen4" component={Screen1}/>
                <Tab.Screen options={{title:"Other"}} name="screen3" component={Screen3}/>
            </Tab.Navigator>

            
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
