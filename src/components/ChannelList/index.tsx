import React from 'react';

import ChannelButton from '../ChannelButton';

import { Container, Category, AddCategoryIcon } from './styles';

const ChannelList: React.FC = () => {
  return(
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="chat-livre" description="Canal aberto para conversas" />
      <ChannelButton channelName="trabalho" description="Apenas para trabalhos" />
      <ChannelButton channelName="lolzinho" description="Só não feedar" />
      <ChannelButton channelName="valorant" description="Só bala tensa" />
      <ChannelButton channelName="csgo" description="Rush B 24/7" />
    </Container>
  );
}

export default ChannelList;
