import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

function ListItemDeleteAction({onPress}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>

        <View style={styles.container}>
            <MaterialCommunityIcons name="trash-can" color="white" size={35}/>
        </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.danger,
        width: 70,
        justifyContent: 'center', // Center the icon vertically
        alignItems: 'center', // Center the icon horizontally
        height: '100%', // Ensure the container takes full height
    },
});

export default ListItemDeleteAction;
