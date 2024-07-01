import React from 'react';
import { Image, ImageBackground, StyleSheet, View, Text } from 'react-native';
import AppButton from '../components/AppButton';

const WelcomeScreen = () => {
  return (
    <ImageBackground
    blurRadius={3}
      source={require('../assets/background.jpg')}
      style={styles.background}
    >
        <View style={styles.logoContainer}>
        
        <Image 
        style={styles.logo}
        source={require("../assets/logo-red.png")}/>
        <Text style={styles.tagline}>Sell what you don't need</Text>
        </View>
        <View style={styles.buttonsContainer}>
        <AppButton title="Login" onPress={()=>console.log("tapped")}/>
        <AppButton title="Register" onPress={()=>console.log("tapped")} color="secondary"/>

        </View>
    </ImageBackground>

  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",//Justify items along the primary axis
    alignItems:"center",
    },
    buttonsContainer: {
        padding: 20,
        width: '100%',
    },
    
    
    logo:{
        width:100,
        height:100,
        	
    },
    logoContainer:{
        position:"absolute",//Use absolute positioning to position the image relative to the parent background image
        top:70,
        alignItems:"center",
    },
    tagline:{
        fontSize:20,
        fontWeight:"600",
        paddingVertical:20,
    }
    
});

export default WelcomeScreen;
