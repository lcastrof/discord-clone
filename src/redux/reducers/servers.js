const INITIAL_STATE = {
  server: {
    name: 'Servidor do Lucas',
  }
};


export default function servers(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SWITCH_SERVER': 
      return {...state, server: {...state.server, name: action.name}};
    default:
      return state;
  }
}