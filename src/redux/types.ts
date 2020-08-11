// state interfaces

export interface ChannelState {
  channel: {
    name: string;
    description: string;
  }
}

export interface ServerState {
  server: {
    name: string;
  }
}

// action types

export const SWITCH_CHANNEL = 'SWITCH_CHANNEL';
export const SWITCH_SERVER = 'SWITCH_SERVER';

interface SwitchChannelAction {
  type: typeof SWITCH_CHANNEL;
  payload: {
    name: string;
    description: string;
  };
}

interface SwitchServerAction {
  type: typeof SWITCH_SERVER;
  name: string;
}

export type ChannelActionTypes = SwitchChannelAction;
export type ServerActionTypes = SwitchServerAction;