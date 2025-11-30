import {View } from "react-native"
import Screen1 from "./Components/Screen1.js"
import { Text } from "react-native";
import { StyleSheet } from "react-native";




const App = () =>{
    return(
        <View style = {sty.body}>
            <Screen1></Screen1>
        </View>
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
