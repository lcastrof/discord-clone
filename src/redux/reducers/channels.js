const INITIAL_STATE = {
  channel: {
    name: 'chat-livre',
    description: 'Canal aberto para conversas'
  }
};


export default function channels(state = INITIAL_STATE, action) { //reducer
  switch (action.type) {
    case 'SWITCH_CHANNEL': 
      return {...state, channel: {...state.channel, name: action.name, description: action.description}};
    default:
      return state;
  }
}