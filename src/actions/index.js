import axios from 'axios';

export const FETCH_ALBUMS = "FETCH_ALBUMS";

export function fetchAlbums () {
  const request = axios.get('/api/albums')

  return {
    type: FETCH_ALBUMS,
    payload: request
  }
}
