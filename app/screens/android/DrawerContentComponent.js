import React, { Component } from 'react';
import { DrawerItems } from 'react-navigation';
import {
    ScrollView,
    View,
    StyleSheet,
    Text
} from 'react-native';

const styles = StyleSheet.create({
    drawerHeader: {
        justifyContent: 'center',
        height: 216,
        backgroundColor: '#26c6da'
    }
});

const DrawerContentComponent = (props) => (
    <View>
        <View style={styles.drawerHeader}>
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Brain Tools</Text>
            </View>
        </View>
        <ScrollView>
            <DrawerItems {...props} />
        </ScrollView>
    </View>
);

export default DrawerContentComponent;

