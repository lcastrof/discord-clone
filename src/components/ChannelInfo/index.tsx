import React from 'react';
import { useSelector } from 'react-redux';

import { Container, HashTagIcon, Title, Separator, Description } from './styles';
import { RootState } from '../../redux/reducers';

const ChannelInfo: React.FC = () => {
  const selectChannelName = (state: RootState) => state.channels.channel.name;
  const selectChannelDescription = (state: RootState) => state.channels.channel.description;
  
  const activeChannel = useSelector(selectChannelName);
  const activeChannelDescription = useSelector(selectChannelDescription);

  return(
    <Container>
      <HashTagIcon />

      <Title>{activeChannel}</Title>

      <Separator />

      <Description>{activeChannelDescription}</Description>
    </Container>
  );
}

export default ChannelInfo;
