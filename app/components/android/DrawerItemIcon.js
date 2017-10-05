import React  from 'react';
import { Icon } from 'react-native-elements'

const DrawerItemIcon = ({iconName, tintColor}) => {
    return (
        <Icon name={iconName} color={tintColor} size={20} type={"font-awesome"}/>
    );
};

export default DrawerItemIcon;