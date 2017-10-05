import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Picker,
    TextInput,
    FlatList
} from 'react-native';
import ActionButton from 'react-native-action-button';

export default class HomeFinanceScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            entryType: '',
            entryAmount: 0,
            entryList: [
                {
                    type: 0,
                    category: 'Food',
                    amount: 12.34
                },
                {
                    type: 0,
                    category: 'Cable',
                    amount: 21.34
                },
                {
                    type: 0,
                    category: 'Phone',
                    amount: 32.34
                },
                {
                    type: 0,
                    category: 'Food',
                    amount: 12.34
                },
                {
                    type: 0,
                    category: 'Entertainment',
                    amount: 12.34
                },
                {
                    type: 0,
                    category: 'Savings',
                    amount: 123.4
                },
                {
                    type: 0,
                    category: 'Phone',
                    amount: 32.34
                },
                {
                    type: 0,
                    category: 'Food',
                    amount: 12.34
                },
                {
                    type: 0,
                    category: 'Entertainment',
                    amount: 12.34
                },
                {
                    type: 0,
                    category: 'Savings',
                    amount: 123.4
                },
                {
                    type: 0,
                    category: 'Food',
                    amount: 12.34
                },
                {
                    type: 1,
                    category: 'Credit',
                    amount: 2000.00
                }
            ]
        };
    }

    _onEntryValueTypeChange = (itemValue, itemIndex) => {
        this.setState({entryType: itemValue});
    };

    _onEntryAmountChangeText = (text) => {
        this.setState({entryAmount: text});
    };

    renderItem = ({item}) => {
        console.log(item);
        return (
            <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{flex: 2}}>
                    <Text style={styles.item}>{item.category}</Text>
                </View>
                <View style={{flex: 1}}>
                    <Text style={styles.item}>{item.type === 0 ? '-' : '+'}</Text>
                </View>
                <View style={{flex: 2}}>
                    <Text style={styles.item}>{item.amount}</Text>
                </View>
            </View>
        );
    };

    render() {
        return (
            <View style={{flex: 1}}>

                <View style={styles.budgetContainer}>
                    <Text>Oct</Text>
                    <View style={styles.budgetContainerStatus}>
                        <View style={styles.budgetCredit}>
                            <Text style={styles.budgetStatusText}>+ 1945,00€</Text>
                        </View>
                        <View style={styles.budgetDebit}>
                            <Text style={styles.budgetStatusText}>- 1200,00€</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.lastEntriesContainer}>
                    <FlatList
                        data={this.state.entryList}
                        keyExtractor={(entry, index) => index}
                        renderItem={this.renderItem}
                    />
                </View>

                <ActionButton buttonColor="rgba(231,76,60,1)" onPress={this._onPressActionButton}>
                </ActionButton>

            </View>
        );
    }

    _onPressActionButton = () => {
        this.props.navigation.navigate('NewEntry');
    };
}

const styles = StyleSheet.create({
    budgetContainer: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10
    },
    budgetContainerStatus: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    budgetCredit: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: 185,
        height: 75,
        backgroundColor: 'green'
    },
    budgetDebit: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: 185,
        height: 75,
        backgroundColor: 'red'
    },
    budgetStatusText: {
        color: '#ffffff'
    },
    entryContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    entryType: {
        flex: 1
    },
    entryAmount: {
        flex: 2
    },
    entryAmountInput: {

    },
    lastEntriesContainer: {
        flex: 2
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    }
});