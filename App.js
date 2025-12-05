import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Main from "./Components/Main";
import Screen3 from "./Components/Screen3";

const Stack = createNativeStackNavigator();

const App = () =>{

    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown:false}}>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="signup" component={SignUp}/>
                <Stack.Screen name="main" component={Main}/>
                <Stack.Screen name="screen3" component={Screen3}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;