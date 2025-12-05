import { useNavigation } from "@react-navigation/native";
import { Button, StyleSheet, Text, View } from "react-native";


export default function SignUp(){

    const navigation = useNavigation();

    return(
        <View style={sty.body}>
            <Text>
                SignUp
            </Text>
            <Button title="Go to Back Login Page" onPress={()=>{navigation.goBack()}}/>
            <Button title="Done SignUp" onPress={()=>{navigation.navigate("main")}}/>
        </View>
    )
}

const sty = StyleSheet.create({
    body:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})