import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function ViewImageScreen(props) {
    return (
        <View sytles={styles.container}>
            <View style={styles.closeIcon}>
                <MaterialCommunityIcons name="close" color="black" size={30}/>
            </View>
            <View style={styles.deleteIcon}>
            <MaterialCommunityIcons name="trash-can-outline" color="black" size={30}/>
            </View>
            <Image
            resizeMode="contain"	
            style={styles.image} 
            source={require("../assets/chair.jpg")}
            />
        </View>
        
    );
}

const styles = StyleSheet.create({
    closeIcon:{
        
        position:"absolute",
        top: 40,
        left:30
    },
    container:{
        backgroundColor:colors.black, 
        flex:1, //Spread to the whole page

    },
    deleteIcon:{
       
        position:"absolute",
        top: 40,
        right:30
    },
    image:{
        width:"100%",
        height:"100%",

    }
}
)

export default ViewImageScreen;