import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function PropertyFilter() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Find Property</Text>
      <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollContainer}
      >
        <View style={styles.box}>
          <Feather name="sliders" size={18} color="black" style={styles.icon}/>
          <Text style={styles.text}>Filters</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.text}>City</Text>
          <AntDesign name="caret-down" size={16} color="black" />
        </View>
         <View style={styles.box}>
          <Text style={styles.text}>Price Range</Text>
          <AntDesign name="caret-down" size={16} color="black" />
        </View>
         <View style={styles.box}>
          <Text style={styles.text}>Area Range</Text>
          <AntDesign name="caret-down" size={24} color="black" />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    paddingVertical:20,
    paddingHorizontal:30
  },
  heading:{
    fontSize:18,
    fontWeight:400
  },
  scrollContainer:{
    paddingVertical:15,
    gap:10
  },
  box:{
    display:"flex",
    alignItems:"flex-end",
    flexDirection:"row",
    gap:5,
    paddingVertical:8,
    paddingHorizontal:18,
    borderWidth:1,
    borderRadius: 10
  },
  text:{
    fontSize:16,
    fontWeight:500
  },
  icon:{
    marginRight:10
  }

})