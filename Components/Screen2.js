import { useNavigation } from "@react-navigation/native";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native"



const Screen2=()=>{

        const navigation = useNavigation();
    return(
        <View style={sty.body}>
            <View style={sty.box}>
                <Text style={{color:"white",fontSize:23,textAlign:"center",fontWeight:"bold"}}>Radiant College</Text>
            </View>
            <View style={sty.box}>
                <Text style={{color:"white",fontSize:23,textAlign:"center",fontWeight:"bold"}}>Radiant College</Text>
            </View>
            <View style={sty.box}>
                <Text style={{color:"white",fontSize:23,textAlign:"center",fontWeight:"bold"}}>Radiant College</Text>
            </View>
            <View style={sty.box}>
                <Text style={{color:"white",fontSize:23,textAlign:"center",fontWeight:"bold"}}>Radiant College</Text>
            </View>
            <View style={sty.box}>
                <Text style={{color:"white",fontSize:23,textAlign:"center",fontWeight:"bold"}}>Radiant College</Text>
            </View>
            
            <TouchableOpacity onPress={()=>{navigation.navigate("Home")}}>
                <View style={sty.box}>
                    <Text style={{color:"white",fontSize:23,textAlign:"center",fontWeight:"bold"}}>Return to Home</Text>
                </View>
            </TouchableOpacity>
                
            </View>
    )
}


export default Screen2;

const sty = StyleSheet.create({
    body:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"white",
        gap:15
    },
    box:{
        backgroundColor:"royalblue",
        width:"40%",
        padding:30,
        borderRadius:20
    }
})