import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.buttonStyle} >
        <Text style={styles.textStyle}>
            {children}
        </Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#FFF',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#7f8c8d',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#FFF',
        marginLeft: 5,
        marginRight: 5
    }
};

export { Button };
