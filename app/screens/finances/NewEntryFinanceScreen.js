import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Picker,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';
import { Divider, Icon } from 'react-native-elements'
import DateTimePicker from 'react-native-modal-datetime-picker';
import Moment from 'moment';

export default class NewEntryFinanceScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            entryType: '',
            entryAmount: '',
            entryDescription: '',
            entryDate: null,
            isDateTimePickerVisible: false
        };
    }

    _onEntryValueTypeChange = (itemValue, itemIndex) => this.setState({entryType: itemValue});

    _onEntryAmountChangeText = (text) => this.setState({entryAmount: text});

    _onEntryDescriptionChangeText = (text) => this.setState({entryDescription: text});

    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = (date) => {
        console.log(date.getTime());
        this.setState({entryDate: date.getTime() });
        this._hideDateTimePicker();
    };

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={styles.descContainer}>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <Text>Category</Text>
                    </View>
                    <View style={{flex: 3, justifyContent: 'center'}}>
                        <Picker
                            prompt="Select a category"
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
                </View>
                <Divider style={{ backgroundColor: '#26c6da' }} />
                <View style={styles.inputContainer}>
                    <View style={{flexDirection: 'row', paddingTop: 20}}>
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Image
                                source={require("../../images/invoice.png")}
                                style={{width: 75, height: 75}}
                            />
                        </View>
                        <View style={{flex: 3}}>
                            <View style={{flex: 1}}>
                                <TextInput
                                    placeholder={'Enter a description'}
                                    onChangeText={this._onEntryDescriptionChangeText}
                                    value={this.state.entryDescription}
                                    style={styles.entryAmountInput}
                                />
                            </View>
                            <View style={{flex: 1}}>
                                <TextInput
                                    placeholder={'0.00'}
                                    keyboardType="numeric"
                                    onChangeText={this._onEntryAmountChangeText}
                                    value={this.state.entryAmount}
                                    style={styles.entryAmountInput}
                                />
                            </View>
                        </View>
                    </View>
                </View>
                <Divider style={{ backgroundColor: '#26c6da' }} />
                <View style={styles.bottomContainer}>
                    <TouchableOpacity onPress={this._showDateTimePicker}>
                        <View style={{flexDirection: 'row', paddingTop: 10}}>
                            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                <Icon name={"calendar-today"} type={"material-community"} />
                            </View>
                            <View style={{flex: 9, justifyContent: 'center'}}>
                                <Text>{!this.state.entryDate ? "Today" : Moment(this.state.entryDate).format('MM/DD/YYYY')}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <DateTimePicker
                        isVisible={this.state.isDateTimePickerVisible}
                        onConfirm={this._handleDatePicked}
                        onCancel={this._hideDateTimePicker}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    descContainer: {
        flex: 1,
        flexDirection: 'row',
        minHeight: 50,
        maxHeight: 75
    },
    inputContainer: {
        flex: 8,
    },
    bottomContainer: {
        flex: 1,
        minHeight: 50,
        maxHeight: 75
    }
});