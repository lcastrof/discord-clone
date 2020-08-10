import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Container, HashTagIcon, InviteIcon, SettingsIcon } from './styles';

export interface Props {
  channelName: string;
  description: string;
  selected?: boolean;
}

interface StateProps {
  channel: {
    name: string;
  }
}


const ChannelButton: React.FC<Props> = ({ channelName, description }) => {
  const activeChannel = useSelector((state: StateProps) => state.channel.name);
  const dispatch = useDispatch();

  function switchActiveChannel(channelName: string, description: string) {
    dispatch({ type: "SWITCH", name: `${channelName}`, description: `${description}` });
  }

  return(
    <Container 
      className={(channelName === activeChannel) ? 'active' : ''}
      onClick={() => switchActiveChannel(channelName, description)}
    >
      <div>
        <HashTagIcon />
        <span>{channelName}</span>
      </div>

      <div id="side-icons">
        <InviteIcon />
        <SettingsIcon />
      </div>
    </Container>
  );
}

export default ChannelButton;
