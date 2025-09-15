import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import VerifyScreen from "./components/VerifyScreen";
import ProfileScreen from "./components/ProfileScreen";



export default function RootLayout() {
  const Stack = createNativeStackNavigator();
  return(
    <Stack.Navigator initialRouteName="verify" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="verify" component={VerifyScreen}/>
      <Stack.Screen name="Profile" component={ProfileScreen}/>
    </Stack.Navigator>
  );
}
