import React from 'react';
import { StyleSheet,View,FlatList } from 'react-native'
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import colors from '../config/colors';
import Icon from '../components/Icon';
import ListItemSeparator from '../components/ListItemSeparator';

const menuItems=[
    {
        title:"My Listings",
        icon:{
            name:"format-list-bulleted",
            backgroundColor:colors.primary,
        }
    },
    {
        title:"My Listings",
        icon:{
            name:"email",
            backgroundColor:colors.secondary,
        }
    },
]

function AccountScreen(props) {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
            <ListItem
                title="Mosh Hamedani"
                subTitle="programmingwithmosh@gmail.com"
                image={require("../assets/mosh.jpg")}       
            />
            </View>
            <View>
                <FlatList
                    data={menuItems}
                    keyExtractor={menuItem=>menuItem.title}
                    ItemSeparatorComponent={ListItemSeparator}
                    renderItem={({item})=>
                        <ListItem
                            title={item.title}
                            imageComponent={
                                <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor}/>
                            }
                            
                        />

                    }                
                />
            </View>
            
            <View style={styles.container}>
            
                <ListItem
                    title="Log Out"
                    imageComponent={
                        <Icon name="logout" backgroundColor="#ffe66d"/>
                    }
                />
            </View>
        </Screen>
    );
}
const styles = StyleSheet.create({
    container:{
        marginVertical:20,
    },
    screen:{
        backgroundColor:colors.light,
    }
})

export default AccountScreen;