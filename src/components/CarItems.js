import React from 'react';
import { StyleSheet, View, Text, ImageBackground,Dimensions } from 'react-native';
import ButtonComponent from './ButtonComponent';
import Header from './Header';

const CarItem = (props) => {

    const {name,tagline,image,taglineCTA} = props.item

    return (

        <View style={styles.carContainer}>
            <Header />
            <ImageBackground source={image} style={styles.image} />
            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subTitle}>{tagline}<Text style={{textDecorationLine:'underline'}}>{taglineCTA}</Text></Text>
            </View>
            <View style={styles.btn_container}>
                <ButtonComponent title='custumer Order' type='primary' />
                <ButtonComponent title='existing inventory' type='secondary' />
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    carContainer: {
        width: '100%',
        height: Dimensions.get('window').height,
    },
    titles: {
        alignItems: 'center',
        marginTop: '30%'

    },
    title: {
        fontSize: 40,
        fontWeight: '600',
    },
    subTitle: {
        fontSize: 20,
        color: 'grey'
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute'
    },
    btn_container:{
        position:'absolute',
        paddingHorizontal:10,
        bottom:40,
        width:'100%'
    }
});

export default CarItem;
