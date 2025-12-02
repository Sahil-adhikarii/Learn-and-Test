import { StyleSheet, Text } from "react-native"
import { View } from "react-native"


 export default function Screen3()
 {

    return(
        <View style={sty.body}>
            <Text>Hello this is Screen 3</Text>
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