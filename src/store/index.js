import { createStore } from 'redux';

const INITIAL_STATE = {
  channel: {
    name: 'chat-livre',
    description: 'Canal aberto para conversas'
  }
};

function channels(state = INITIAL_STATE, action) { //reducer
  switch (action.type) {
    case 'SWITCH': 
      return {...state, channel: {...state.channel, name: action.name, description: action.description}};
    default:
      return state;
  }
}

const store = createStore(channels);

export default store;
