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
import { Icon } from 'react-native-elements'

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

                <View style={styles.entryContainer}>
                    <View style={styles.entryType}>
                        <Picker
                            selectedValue={this.state.entryType}
                            onValueChange={this._onEntryValueTypeChange}>
                            <Picker.Item label="Donations" value="Donations" />
                            <Picker.Item label="Savings" value="Savings" />
                            <Picker.Item label="Mortgage/Rent" value="js" />
                            <Picker.Item label="Electricity/Water" value="Utilities:Electricity/Water" />
                            <Picker.Item label="Gas" value="Utilities:Gas" />
                            <Picker.Item label="Internet" value="Utilities:Internet" />
                            <Picker.Item label="Cable" value="Utilities:Cable" />
                            <Picker.Item label="Phone" value="Utilities:Phone" />
                            <Picker.Item label="Clothing" value="Clothing" />
                            <Picker.Item label="Food" value="Food" />
                            <Picker.Item label="Loans" value="Loans" />
                            <Picker.Item label="Car Payment" value="Transportation:CarPayment" />
                            <Picker.Item label="Car Insurance" value="Transportation:CarInsurance" />
                            <Picker.Item label="Gas & Oil" value="Transportation:Gas&Oil" />
                            <Picker.Item label="Entertainment" value="Entertainment" />
                            <Picker.Item label="Credit" value="Credit" />
                            <Picker.Item label="Other" value="Other" />
                        </Picker>
                    </View>
                    <View style={styles.entryAmount}>
                        <TextInput
                            keyboardType="numeric"
                            onChangeText={this._onEntryAmountChangeText}
                            value={this.state.entryAmount}
                            style={styles.entryAmountInput}
                        />
                    </View>
                </View>

                <View style={styles.lastEntriesContainer}>
                    <FlatList
                        data={this.state.entryList}
                        keyExtractor={(entry, index) => index}
                        renderItem={this.renderItem}
                    />
                </View>

                <View style={{
                    position: 'absolute',
                    left: 150,
                    top: 200,
                    backgroundColor: '#f3f3f3'}}>
                    {/* Rest of the app comes ABOVE the action button component !*/}
                    <ActionButton buttonColor="rgba(231,76,60,1)">
                        <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
                            <Icon name="md-create" style={styles.actionButtonIcon} />
                        </ActionButton.Item>
                        <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {}}>
                            <Icon name="md-notifications-off" style={styles.actionButtonIcon} />
                        </ActionButton.Item>
                        <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => {}}>
                            <Icon name="md-done-all" style={styles.actionButtonIcon} />
                        </ActionButton.Item>
                    </ActionButton>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    budgetContainer: {
        borderWidth: 1,
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
        borderWidth: 1,
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
        borderWidth: 1,
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