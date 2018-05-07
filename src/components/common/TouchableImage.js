import React from 'react';
import { TouchableHighlight, Image, View } from 'react-native';

const TouchableImage = ({ onPress, imageDetails }) => {
    return (
        <View style={{ flex: 1 }}>
            <TouchableHighlight onPress={onPress}>
                <Image source={{ uri: imageDetails.thumbnail }} style={styles.imageStyle} />
            </TouchableHighlight>
        </View>
    );
};

const styles = {
    imageStyle: {
        height: 300,
        flex: 1,
        width: undefined
    }
};

export { TouchableImage };
