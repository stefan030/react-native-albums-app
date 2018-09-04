import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Header extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>{this.props.headerText}</Text>
            </View>
        )
    }
}

let styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#ededed',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        elevation: 6,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
});
