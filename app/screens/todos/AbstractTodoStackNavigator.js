import React from 'react';
import {
    StackNavigator
} from 'react-navigation';

import DrawerIcon from "../../components/android/DrawerIcon";
import AbstractTodoTabNavigator from "./AbstractTodoTabNavigator";

const AbstractTodoStackNavigator = StackNavigator({
    Todo: {
        screen: AbstractTodoTabNavigator,
        navigationOptions: ({ navigation }) => ({
            title: 'Todo',
            headerLeft : <DrawerIcon navigate={navigation.navigate} />,
            headerStyle: {
                backgroundColor: "#26418f",
            },
            headerTitleStyle: {
                color: "#ffffff"
            }
        })
    },
});

export default AbstractTodoStackNavigator;

