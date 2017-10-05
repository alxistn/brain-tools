import React from 'react';
import {
    TabNavigator
} from 'react-navigation';

import HomeTodoScreen from "./HomeTodoScreen";
import TabBarIcon from "../../components/TabBarIcon";

const AbstractTodoTabNavigator = TabNavigator({
    Home: {
        screen: HomeTodoScreen,
        navigationOptions: ({ navigation }) => ({
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor }) => (
                <TabBarIcon
                    iconName="home"
                    tintColor={tintColor}
                />
            ),
        })
    }
}, {
    tabBarPosition: 'top',
    animationEnabled: true,
    tabBarOptions: {
        activeTintColor: '#26c6da',
        inactiveTintColor: '#ffffff',
        showIcon: true,
        style: {
            backgroundColor: "#5c6bc0"
        },
        indicatorStyle: {
            backgroundColor: "#26c6da"
        },
        tabStyle: {
            flexDirection: 'row',
        },
    },
});

export default AbstractTodoTabNavigator;