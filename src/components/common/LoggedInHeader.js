import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const LoggedInHeader = (props) => {
    const { textStyle, viewStyle, buttonStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={{ margin: 38 }} />
            <Text style={textStyle}>{props.headerText}</Text>
            <TouchableOpacity onPress={props.onPress} style={styles.buttonStyle} >
        <Text style={styles.textStyle}>
            Logout
        </Text>
        </TouchableOpacity>
        </View>
    );    
};

const styles = {
    viewStyle: {
        backgroundColor: '#bdc3c7',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    },
    buttonStyle: {
        backgroundColor: '#7f8c8d',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#FFF',
        margin: 5,
        padding: 2
    }
};

export { LoggedInHeader };
