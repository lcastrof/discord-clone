import React from 'react';

import ServerButton from '../ServerButton';

import { Container, Separator } from './styles';

const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome name="Servidor do Lucas" />

      <Separator /> 

      <ServerButton name="Servidor avulso 2" />
      <ServerButton name="Servidor avulso 3" hasNotifications />
      <ServerButton name="Servidor avulso 4" mentions={3} />
      <ServerButton name="Servidor avulso 5" />
      <ServerButton name="Servidor avulso 6" />
      <ServerButton name="Servidor avulso 7" />
      <ServerButton name="Servidor avulso 8" hasNotifications />
      <ServerButton name="Servidor avulso 9" />
      <ServerButton name="Servidor avulso 10" />
      <ServerButton name="Servidor avulso 11" mentions={20} />
      <ServerButton name="Servidor avulso 12" />
    </Container>
  );
}

export default ServerList;
