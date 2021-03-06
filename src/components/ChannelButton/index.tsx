import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { switchChannel } from '../../redux/actions';

import { Container, HashTagIcon, InviteIcon, SettingsIcon } from './styles';
import { RootState } from '../../redux/reducers';

export interface Props {
  channelName: string;
  description: string;
  selected?: boolean;
}

const ChannelButton: React.FC<Props> = ({ channelName, description }) => {
  const selectChannelName = (state: RootState) => state.channels.channel.name;
  const activeChannel = useSelector(selectChannelName);
  const dispatch = useDispatch();

  function switchActiveChannel(channelName: string, description: string) {
    dispatch(switchChannel(channelName, description));
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
