import React from 'react';
import {
    StackNavigator
} from 'react-navigation';

import DrawerIcon from "../../components/android/DrawerIcon";
import AbstractFinanceTabNavigator from "./AbstractFinanceTabNavigator";
import DrawerItemIcon from "../../components/android/DrawerItemIcon";

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
});

export default AbstractFinanceStackNavigator;

