import React from 'react';

import { Container, Title, ExpandIcon } from './styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';

const ServerName: React.FC = () => {
  const selectServerName = (state: RootState) => state.servers.server.name;
  const currentServer = useSelector(selectServerName);

  return(
    <Container>
      <Title>{currentServer}</Title>

      <ExpandIcon />
    </Container>
  );
}

export default ServerName;
