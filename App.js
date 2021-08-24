import React from 'react';
import { StyleSheet,View } from 'react-native';
import CarList from './src/components/CarsList';

const App = () => {
  return (
    <View style={styles.container}>
     <CarList />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    //flex:1,
  },
});

export default App;
