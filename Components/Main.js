import { NavigationContainer } from "@react-navigation/native"
import { StyleSheet, Text, View } from "react-native"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";

const Tab = createMaterialTopTabNavigator();

export default function Main(){

    return(
            <Tab.Navigator>
                <Tab.Screen options={{title:"Home"}} name="screen1" component={Screen1}/>
                <Tab.Screen options={{title:"Homee"}} name="Screen2" component={Screen2}/>
            </Tab.Navigator>
    )
}