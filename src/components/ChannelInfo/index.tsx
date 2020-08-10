import React from 'react';
import { useSelector } from 'react-redux';

import { Container, HashTagIcon, Title, Separator, Description } from './styles';

interface StateProps {
  channel: {
    name: string;
    description: string;
  }
}

const ChannelInfo: React.FC = () => {
  const activeChannel = useSelector((state: StateProps) => state.channel.name);
  const activeChannelDescription = useSelector((state: StateProps) => state.channel.description);

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
