import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        padding: 5,
        backgroundColor: '#bdc3c7',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        position: 'relative'
    }
};

export { CardSection };
