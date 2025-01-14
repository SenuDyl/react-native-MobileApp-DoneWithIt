import React from 'react';
import { View, StyleSheet,Image } from 'react-native';
import AppText from './AppText';
import colors from '../config/colors';
import { TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

function ListItem({title,subTitle,image,imageComponent,onPress,renderRightActions}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight 
        underlayColor={colors.light}
        onPress={onPress}>

        <View style={styles.container}>
            {imageComponent}
            {image && <Image style={styles.image} source={image}/>}
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{title}</AppText>
                {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
            </View>
        </View>
        </TouchableHighlight>

        </Swipeable>
    );
}
const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        padding:15,
        backgroundColor:colors.white,
    },
    detailsContainer:{
        marginLeft:10,
        justifyContent:"center",
    },
    image:{
        width:70,
        height:70,
        borderRadius:35,
       
    },
    subTitle: {
        color:colors.medium,
    },
    title:{
        fontWeight:"500",
    }
})

export default ListItem;