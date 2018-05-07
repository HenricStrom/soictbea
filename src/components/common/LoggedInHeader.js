// Import libraries for making a component
import React from 'react';
import { Text, View, Button } from 'react-native';


//Make a component
const LoggedInHeader = (props) => {
    const { textStyle, viewStyle, buttonStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={{margin: 20}} />
            <Text style={textStyle}>{props.headerText}</Text>
            <Button title="OK!" style={buttonStyle} onPress={null}/>
        </View>
    );    
};

const styles = {
    viewStyle: {
        backgroundColor: '#bdc3c7',
        justifyContent:  'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative',
        
        
        //flex: 1,
        // flexDirection: 'row',
        // height: 40,
        // position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};

export { LoggedInHeader };
