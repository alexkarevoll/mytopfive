import React, { Component } from 'react';
import axios from 'axios';

export default class AlbumList extends Component {

  componentWillMount() {
    let albums = {}
    axios('/api/albums').then((response) => console.log(response))
  }

  render () {
    return (
      <div>
        <p>Album List is here</p>
      </div>
    )
  }
}
