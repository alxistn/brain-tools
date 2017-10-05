import React  from 'react';
import {
    View
} from 'react-native';
import {
    Icon
} from 'react-native-elements'

const TabBarIcon = ({iconName, tintColor}) => {
    return (
        <View style={{flexDirection:'row'}}>
            <Icon
                name={iconName}
                size={20}
                color={tintColor}
                type={"font-awesome"}
            />
        </View>
    );
};

export default TabBarIcon;
