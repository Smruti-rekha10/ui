import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
  
const CheckBox = (props) => {
    const iconName = props.isChecked ?
        "checkbox-marked" : "checkbox-blank-outline";
  
    return (
        <View style={styles.container}>
            <Pressable onPress={props.onPress}>
                <MaterialCommunityIcons 
                    name={iconName} size={20} color="#000" />
            </Pressable>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    );
};
  
export default CheckBox;
  
const styles = StyleSheet.create({
    container: {
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        width: 100,
        marginTop: 5,
        marginHorizontal: 5,
    },
    title: {
        fontSize: 13,
        color: "#000",
        marginLeft: 5,
        fontWeight: "500",
    },
});
