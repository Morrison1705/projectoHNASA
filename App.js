import "react-native-gesture-handler"; 
import * as React from "react"
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from './screens/home';
import IssLocationScreens from './screens/IssLocationScreens';
import MeteorScreen from './screens/MeteorScreen';
import UpdateScreen from './screens/UpdateScreen';

const Stack = createStackNavigator();
function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Home" screensOptions={{
      headerShown:false

      }}>
      <Stack.Screen name = "Home" component={HomeScreen}/>
      <Stack.Screen name = "IssLocation" component={IssLocationScreens}/>
      <Stack.Screen name = "Meteors" component={MeteorScreen}/>
      <Stack.Screen name = "Update" component={UpdateScreen }/>
      
      </Stack.Navigator>
      </NavigationContainer>
  );
}
export default App;
