import React from 'react';

//yarn add @react-navigation/stack
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//yarn add @react-navigation/drawer

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

const Stack = createNativeStackNavigator();

function MealsNavigator(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Categories Screen" component={CategoriesScreen} />
                <Stack.Screen name="Category Meals Screen" component={CategoryMealsScreen} />
                <Stack.Screen name="Meal Detail Screen" component={MealDetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MealsNavigator;