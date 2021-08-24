import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ButtonComponent = ({type,title}) => {
    const backgroundColor = type==='primary'?'black':'white';
    const color = type==='primary'?'white':'black'
    return (
        <TouchableOpacity style={[styles.btn,{backgroundColor: backgroundColor}]}>
            <Text style={[styles.btn_text,{color:color}]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    btn: { 
        marginBottom:20,
        height:40,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
    },
    btn_text: {
        fontSize:16,
        textTransform:'uppercase'
    }
});

export default ButtonComponent;