import React, { Component } from 'react';
import {connect} from 'react-redux'
import {fetchAlbums} from '../actions/index'

class AlbumList extends Component {

  componentWillMount() {
    this.props.fetchAlbums()
  }

  renderAlbums() {
    console.log(this.props.albums.albums)
    return this.props.albums.albums.map((album) => {
      return (
        <tr key={album._id}>
          <td>{album.artist}</td>
          <td>{album.title}</td>
          <td><img src={album.img}/></td>
        </tr>
      )
    })
  }

  render () {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Artist</th>
            <th>Album</th>
            <th>Image</th>
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
