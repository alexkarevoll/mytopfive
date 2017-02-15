import { combineReducers } from 'redux';
import AlbumReducer from './reducer_albums';

const rootReducer = combineReducers ({
  albums: AlbumReducer
});

export default rootReducer;
