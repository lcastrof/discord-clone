import React from 'react';

import { Container, Title, ExpandIcon } from './styles';
import { useSelector } from 'react-redux';

interface StateProps {
  servers: {
    server: {
      name: string;
    }
  }
}

const ServerName: React.FC = () => {
  const currentServer = useSelector(((state: StateProps) => state.servers.server.name))

  return(
    <Container>
      <Title>{currentServer}</Title>

      <ExpandIcon />
    </Container>
  );
}

export default ServerName;
