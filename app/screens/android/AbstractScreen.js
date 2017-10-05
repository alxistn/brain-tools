import React from 'react';
import {
    Platform
} from 'react-native';
import {
    DrawerNavigator
} from 'react-navigation';
import { Icon } from 'react-native-elements'

import AbstractFinanceStackNavigator    from "../finances/AbstractFinanceStackNavigator";
import AbstractTodoStackNavigator       from "../todos/AbstractTodoStackNavigator";
import DrawerContentComponent           from "./DrawerContentComponent";
import DrawerItemIcon from "../../components/android/DrawerItemIcon";

const BrainToolsApp = DrawerNavigator({
    Finance: {
        screen: AbstractFinanceStackNavigator,
        navigationOptions: () => ({
            drawerLabel: 'Finance',
            drawerIcon: ({tintColor}) => <DrawerItemIcon iconName="money" tintColor={tintColor} />
        })
    },
    Todo: {
        screen: AbstractTodoStackNavigator,
        navigationOptions: {
            drawerLabel: 'Todo',
            drawerIcon: ({tintColor}) => <DrawerItemIcon iconName="list" tintColor={tintColor} />
        }
    },
}, {
    contentComponent: DrawerContentComponent,
    headerMode: 'screen',
    mode: Platform.OS === 'ios' ? 'modal' : 'card',
});

export default BrainToolsApp;