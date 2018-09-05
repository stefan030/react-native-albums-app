import React, { Component } from 'react';
import {View, ScrollView} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';


export default class Albums extends Component {
    state = { albums: [] };


    componentWillMount() {
        axios.get('http://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({albums: response.data}));
    }

    renderAlbums() {
        return this.state.albums.map(album =>
            <AlbumDetail key={album.title} album={album}/>
        );
    }

    render() {
        return(
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        )
    }
}