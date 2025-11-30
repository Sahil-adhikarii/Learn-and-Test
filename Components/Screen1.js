import { useState } from "react";
import { Button, FlatList, Image, Modal, Text, TouchableOpacity, View } from "react-native"
import { StyleSheet } from "react-native";


const Screen1 = () =>{

    const[model,setmodel] = useState(false);
    const data = [
        {ID:1,Name:"Ram Kumar",Department:"Computer",Salary:20000,imgUrl:"https://petapixel.com/assets/uploads/2019/02/download-2-800x800.jpeg"},
        {ID:2,Name:"Sham Kumar",Department:"Science",Salary:20000,imgUrl:"https://preview.redd.it/this-person-does-not-exist-v0-9l5x3d2g21591.jpg?width=640&crop=smart&auto=webp&s=4f2cf32ea788e3ecf10354c2bf2709c1f8ffef4e"},
        {ID:3,Name:"Hari Kumar",Department:"Maths",Salary:20000,imgUrl:"https://petapixel.com/assets/uploads/2019/02/download-2-800x800.jpeg"},
        {ID:4,Name:"Gita Kumar",Department:"Management",Salary:20000,imgUrl:"https://preview.redd.it/this-person-does-not-exist-v0-9l5x3d2g21591.jpg?width=640&crop=smart&auto=webp&s=4f2cf32ea788e3ecf10354c2bf2709c1f8ffef4e"},
        {ID:5,Name:"Gita Kumar",Department:"Management",Salary:20000,imgUrl:"https://preview.redd.it/this-person-does-not-exist-v0-9l5x3d2g21591.jpg?width=640&crop=smart&auto=webp&s=4f2cf32ea788e3ecf10354c2bf2709c1f8ffef4e"},
        {ID:6,Name:"Gita Kumar",Department:"Management",Salary:20000,imgUrl:"https://petapixel.com/assets/uploads/2019/02/download-2-800x800.jpeg"},
        {ID:7,Name:"Gita Kumar",Department:"Management",Salary:20000,imgUrl:"https://preview.redd.it/this-person-does-not-exist-v0-9l5x3d2g21591.jpg?width=640&crop=smart&auto=webp&s=4f2cf32ea788e3ecf10354c2bf2709c1f8ffef4e"},
        {ID:8,Name:"Gita Kumar",Department:"Management",Salary:20000,imgUrl:"https://preview.redd.it/this-person-does-not-exist-v0-9l5x3d2g21591.jpg?width=640&crop=smart&auto=webp&s=4f2cf32ea788e3ecf10354c2bf2709c1f8ffef4e"},
        {ID:9,Name:"Gita Kumar",Department:"Management",Salary:20000,imgUrl:"https://petapixel.com/assets/uploads/2019/02/download-2-800x800.jpeg"},
        {ID:10,Name:"Gita Kumar",Department:"Management",Salary:20000,imgUrl:"https://preview.redd.it/this-person-does-not-exist-v0-9l5x3d2g21591.jpg?width=640&crop=smart&auto=webp&s=4f2cf32ea788e3ecf10354c2bf2709c1f8ffef4e"},
        {ID:11,Name:"Gita Kumar",Department:"Management",Salary:20000,imgUrl:"https://petapixel.com/assets/uploads/2019/02/download-2-800x800.jpeg"},
        {ID:12,Name:"Gita Kumar",Department:"Management",Salary:20000,imgUrl:"https://preview.redd.it/this-person-does-not-exist-v0-9l5x3d2g21591.jpg?width=640&crop=smart&auto=webp&s=4f2cf32ea788e3ecf10354c2bf2709c1f8ffef4e"},
    ]

    return(
        <View style={sty.body}>
            <View>
            <FlatList horizontal={true} style={{flexGrow:0}} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} data={data} 
            renderItem={({item})=>(
                <View>
                <View style={sty.box}>
                    <Image source={{uri:item.imgUrl}} style={{width:150,height:150,resizeMode:"contain",borderRadius:10,margin:5}}></Image>
                    <Text>ID: {item.ID}</Text>
                    <Text>Name: {item.Name}</Text>
                    <Text>Department: {item.Department}</Text>
                    <Text>Salary: {item.Salary}</Text>
                    <TouchableOpacity style={[sty.btn,{backgroundColor:"green"}]}><Text style={{fontSize:18,color:"white",fontWeight:"bold",textAlign:"center"}}>Hire</Text></TouchableOpacity>
                    <TouchableOpacity style={sty.btn}><Text style={{fontSize:18,color:"white",fontWeight:"bold",textAlign:"center"}}>Fire</Text></TouchableOpacity>
                </View>
                </View>
            )}></FlatList>
            </View>
            
            <View style={{width:100,}}><Button title="Click" onPress={()=>{setmodel(true)}}></Button></View>
            

            <Modal animationType="fade" visible={model} transparent={true}>
                <View style = {{flex:2,alignItems:"center",justifyContent:"flex-end",backgroundColor:"rgba(0,0,0,0.5)"}}>
                    <TouchableOpacity onPress={()=>{setmodel(false)}} style = {{flex:1,width:"100%"}}></TouchableOpacity>
                    <View style = {{backgroundColor:"white",width:"98%",height:"35%",borderTopLeftRadius:25,borderTopRightRadius:25,justifyContent:"center",alignItems:"center"}}>
                        <Text>Radiant College </Text>
                    </View>
                </View>
            </Modal>
            
            </View>
    )
}


export default Screen1;


const sty = StyleSheet.create({
    body:{
        alignItems:"center",
        justifyContent:"center"
    },
    box:{
        backgroundColor:"white",
        padding:10,
        margin:10,
        borderRadius:10,
    },
    btn:{
        backgroundColor:"red",
        borderRadius:5,
        padding:5,
        marginTop:10

    }

})