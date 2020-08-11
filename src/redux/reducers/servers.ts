import { ServerState, ServerActionTypes, SWITCH_SERVER } from "../types";

const INITIAL_STATE: ServerState = {
  server: {
    name: 'Servidor do Lucas',
  }
};


export default function servers(state = INITIAL_STATE, action: ServerActionTypes) {
  switch (action.type) {
    case SWITCH_SERVER: 
      return {...state, server: {...state.server, name: action.name}};
    default:
      return state;
  }
}