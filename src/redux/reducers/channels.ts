import {
  ChannelState, 
  ChannelActionTypes, 
  SWITCH_CHANNEL
} from '../types';

const INITIAL_STATE: ChannelState = {
  channel: {
    name: 'chat-livre',
    description: 'Canal aberto para conversas'
  }
};


export default function channels(state = INITIAL_STATE, action: ChannelActionTypes) { //reducer
  switch (action.type) {
    case SWITCH_CHANNEL: 
      return {
        ...state, 
        channel: {
          ...state.channel, name: action.payload.name, description: action.payload.description
        }
      };
    default:
      return state;
  }
}