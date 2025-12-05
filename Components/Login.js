import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native";


export default function Login(){
    const Navigation = useNavigation();

    return(
        <View style={sty.body}>
            <View style={sty.box}>
                <Image style={sty.img} source={require("../Assets/Bus.png")}/>

            </View>
            <Text>
                Login
            </Text>
            <Button title="Login" onPress={()=>{Navigation.navigate("main")}}/>
            <Button title="SignUp" onPress={()=>{Navigation.navigate("signup")}}/>
        </View>
    )
}

const sty = StyleSheet.create({

    body:{
        flex:1,
        alignItems:"center"
    },
    box:{
        backgroundColor:"black",
        width:"100%",
        height:300,
        borderBottomLeftRadius:25,
        borderBottomRightRadius:25,
        justifyContent:"flex-end",
        paddingLeft:"1%"


    },
    img:{
        height:63.8,
        width:167.67,
        // backgroundColor:"red",
        resizeMode:"contain",
    }
})