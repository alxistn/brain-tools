import React from 'react';
import {
    TabNavigator
} from 'react-navigation';

import HomeFinanceScreen from "./HomeFinanceScreen";
import HistoryFinanceScreen from "./HistoryFinanceScreen";
import TabBarIcon from "../../components/TabBarIcon";

const AbstractFinanceTabNavigator = TabNavigator({
    Home: {
        screen: HomeFinanceScreen,
        navigationOptions: ({ navigation }) => ({
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor }) => (
                <TabBarIcon
                    iconName="home"
                    tintColor={tintColor}
                />
            ),
        })
    },
    History: {
        screen: HistoryFinanceScreen,
        navigationOptions: ({ navigation }) => ({
            tabBarLabel: 'History',
            tabBarIcon: ({ tintColor }) => (
                <TabBarIcon
                    iconName="history"
                    tintColor={tintColor}
                />
            ),
        })
    },
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

export default AbstractFinanceTabNavigator;