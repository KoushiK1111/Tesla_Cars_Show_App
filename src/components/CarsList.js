import React from 'react';
import { View,Text,StyleSheet,FlatList,Dimensions } from 'react-native';
import CarItem from './CarItems';
import CarsData from './CarsData';

const CarList = () =>{
    return(
        <View style={{}}>
            <FlatList 
                data = {CarsData}
                keyExtractor = {item => item.id}
                renderItem = {({item}) => <CarItem item={item} />}
                showsVerticalScrollIndicator={false}
                snapToAlignment='center'
                decelerationRate='normal'
                snapToInterval={Dimensions.get('window').height}
            />
        </View>
    );
}

const styles = StyleSheet.create({});

export default CarList