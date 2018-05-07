import React from 'react';
import { Text, View, Image } from 'react-native';
import { Card, CardSection } from './common';

const AlbumDetail = ({ album }) => {
    const { name, description, image } = album;

    return (
        <Card>
            <CardSection>
                <View style={styles.headerContentStyle}>
                    <Text style={styles.headerTextStyle}>{name}</Text>
                    <Text>{description}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image source={{ uri: image }} style={styles.imageStyle} />
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};

export default AlbumDetail;
