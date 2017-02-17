import React, { Component } from 'react';
import {connect} from 'react-redux'
import {fetchAlbums} from '../actions/index'

class AlbumList extends Component {

  componentWillMount() {
    this.props.fetchAlbums('Dookie')
  }

  renderAlbums() {
    const spotifyData = this.props.albums.albums.albums.items
    if (!spotifyData){
      return (
        <tr>
          <td>placeholder</td>
          <td>placeholder</td>
          <td>placeholder</td>
        </tr>
      )
    }
    else {
      return spotifyData.map((album) => {
        return (
          <tr key={album.id}>
            <td>{album.artists[0].name}</td>
            <td>{album.name}</td>
            <td><img src={album.images[1].url}/></td>
          </tr>
        )
      })
    }
  }

  render () {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Artist</th>
            <th>Album</th>
            <th>Cover</th>
          </tr>
        </thead>
        <tbody>
          {this.renderAlbums()}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps(state) {
  return {albums: state.albums}
}

export default connect (mapStateToProps, {fetchAlbums})(AlbumList)
