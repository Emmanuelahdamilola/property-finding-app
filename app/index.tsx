import { NavigationContainer } from "@react-navigation/native";
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import RootLayout from "./_layout";


export default function Index() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <RootLayout />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}


