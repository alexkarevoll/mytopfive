import axios from 'axios';

const SPOT_ROOT_URL = `https://api.spotify.com/v1/search?type=album`

export const FETCH_ALBUMS = "FETCH_ALBUMS";

export function fetchAlbums(album) {
  const url= `${SPOT_ROOT_URL}&q=${album}`
  const request = axios.get(url)


  return {
    type: FETCH_ALBUMS,
    payload: request
  }
}
// export function fetchAlbums () {
//   const request = axios.get('/api/albums')
//
//   return {
//     type: FETCH_ALBUMS,
//     payload: request
//   }
// }
