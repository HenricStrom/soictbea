import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';
import { Header } from './common';

class AlbumList extends Component {
    state = { albums: [] };

    componentWillMount() {
        axios.get('https://souizt.backendboys.com/api/recepies')
            .then(response => this.setState({ albums: response.data.recepies }));
    }

    renderAlbums() {
        return this.state.albums.map(album => 
            <AlbumDetail key={album.name} album={album} />);
    }

    render() {
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

export default AlbumList;
