import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card, CardSection, TouchableImage } from './common';

class AlbumDetail extends Component {
    renderDetailsView() {
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <View style={styles.headerContentStyle}>
                        <Text style={styles.headerTextStyle}>{this.props.album.name}</Text>
                        <Text>{this.props.album.description}</Text>
                    </View>
                </CardSection>
    
                <CardSection>
                    <TouchableImage 
                        onPress={this.renderDetailsView()} 
                        imageDetails={this.props.album}
                    />
                </CardSection>
            </Card>
        );
    }
}

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
    }
};

export default AlbumDetail;
