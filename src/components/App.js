import React, { Component } from 'react';
import AlbumList from './album-list'
import SearchBar from './search-bar'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center">Top Five</h1>
        <SearchBar />
        <AlbumList />
      </div>
    )
  }
}
