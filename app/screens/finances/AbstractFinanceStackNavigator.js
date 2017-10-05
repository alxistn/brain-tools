import React from 'react';
import {
    StackNavigator
} from 'react-navigation';

import DrawerIcon from "../../components/android/DrawerIcon";
import AbstractFinanceTabNavigator from "./AbstractFinanceTabNavigator";
import NewEntryFinanceScreen from "./NewEntryFinanceScreen";

const AbstractFinanceStackNavigator = StackNavigator({
    Finance: {
        screen: AbstractFinanceTabNavigator,
        navigationOptions: ({ navigation }) => ({
            title: 'Finance',
            headerLeft : <DrawerIcon navigate={navigation.navigate} />,
            headerStyle: {
                backgroundColor: "#26418f",
            },
            headerTitleStyle: {
                color: "#ffffff"
            }
        })
    },
    NewEntry: {
        screen: NewEntryFinanceScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'New Entry',
            headerStyle: {
                backgroundColor: "#26418f",
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
                color: "#ffffff"
            }
        })
    }
});

export default AbstractFinanceStackNavigator;

