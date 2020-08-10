import { combineReducers } from 'redux';
import channels from './channels';
import servers from './servers';

export default combineReducers({ channels, servers });
