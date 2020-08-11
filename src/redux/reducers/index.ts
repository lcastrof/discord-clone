import { combineReducers } from 'redux';
import channels from './channels';
import servers from './servers';

export const rootReducer = combineReducers({ channels, servers });

export type RootState = ReturnType<typeof rootReducer>;
