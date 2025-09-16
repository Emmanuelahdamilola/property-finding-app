import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import PropertyHeader from "./components/PropertyHeader";
import PropertyFilter from "./components/PropertyFilter";

export default function FindPropertyScreen() {
  const [visible, setVisible] = useState(false);
  return (
    <View style={styles.container}>
      <PropertyHeader/>
      <PropertyFilter/>
      {/* <TouchableOpacity style={styles.button} onPress={() => setVisible(true)}>
        <Text style={styles.buttonText}>FindPropertyScreen</Text>
      </TouchableOpacity> */}

      <Modal
        transparent
        animationType="slide"
        visible={visible}
        onRequestClose={() => setVisible(false)}
      >
        <View style={styles.overlay}>
          <View style={styles.content}>
            <Text style={styles.title}>Overlay Screen</Text>
            <Text>This is on top of everything.</Text>
            <TouchableOpacity
              style={styles.closeBtn}
              onPress={() => setVisible(false)}
            >
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    // justifyContent: "center", 
    // alignItems: "center" 
  },
  button: { 
    backgroundColor: "black", 
    padding: 12, 
    borderRadius: 8 
  },
  buttonText: { 
    color: "white", 
    fontSize: 16 
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  content: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 30,
    width: "100%",
    alignItems: "center",
  },
  title: { 
    fontSize: 18, 
    fontWeight: "bold", 
    marginBottom: 10 
  },
  closeBtn: {
    marginTop: 15,
    backgroundColor: "black",
    padding: 10,
    borderRadius: 8,
  },
});
