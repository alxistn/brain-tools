import React from 'react';
import {
    StackNavigator
} from 'react-navigation';

import DrawerIcon from "../../components/android/DrawerIcon";
import TodoScreen from "./HomeTodoScreen";

const AbstractTodoScreen = StackNavigator({
    Todo: {
        screen: TodoScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Todo',
            headerLeft : <DrawerIcon navigate={navigation.navigate} />,
        })
    },
});

export default AbstractTodoScreen;

