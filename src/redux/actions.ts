import { 
ChannelActionTypes, 
ServerActionTypes, 
SWITCH_CHANNEL, 
SWITCH_SERVER 
} from "./types";

export const switchChannel = (name: string, description: string): ChannelActionTypes => ({
  type: SWITCH_CHANNEL,
  payload: {
    name,
    description
  }
});

export const switchServer = (name: string): ServerActionTypes => ({
  type: SWITCH_SERVER,
  name
});
