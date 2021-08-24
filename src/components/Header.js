import React from 'react';
import {View, Image,StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../asserts/logo.png')} />
      <Image style={styles.menu} source={require('../asserts/menu.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 25,
        zIndex: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal:10,
      },
      logo: {
        width: 100,
        height: 25,
        resizeMode: 'contain',
      },
      menu: {
        width: 30,
        height: 25,
        resizeMode: 'contain',
      }
})

export default Header;