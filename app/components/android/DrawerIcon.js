import React  from 'react';
import {
    View,
    TouchableNativeFeedback,
} from 'react-native';
import { Icon } from 'react-native-elements'

const DrawerIcon = ({navigate}) => {
    return (
        <View>
            <TouchableNativeFeedback onPress={() => { navigate('DrawerOpen')} }>
                <Icon name="bars" style={{padding: 10, marginLeft:10}} size={20} color="#FFFFFF" type={"font-awesome"}/>
            </TouchableNativeFeedback>
        </View>
    );
};

export default DrawerIcon;