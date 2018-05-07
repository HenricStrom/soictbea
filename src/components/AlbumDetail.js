import React from 'react';
import { Text, View, Image } from 'react-native';
import { Card, CardSection } from './common';

const AlbumDetail = ({ album }) => {
    const { title, artist, thumbnail_image, image } = album;

    return (
        <Card>
            <CardSection>
                <View style={styles.thumbnailContainerStyle}>
                    <Image source={{ uri: thumbnail_image }} style={styles.thumbnailStyle} />
                </View>
                <View style={styles.headerContentStyle}>
                    <Text style={styles.headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
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
