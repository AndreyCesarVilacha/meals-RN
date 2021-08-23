import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const CategoriesScreen = props => {
    return (
        <View>
            <Text>The Categories Screen!</Text>
            <Button title="Go to Meals" onPress={() => {
                props.navigation.navigate("Category Meals");
            }}/>
        </View>
    )
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default CategoriesScreen;