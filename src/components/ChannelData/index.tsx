import React, {  useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => { 
    const div = messagesRef.current;

    if(div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        <ChannelMessage 
          author="Lucas de Castro"
          date="20/07/2020"
          content="Mensagem de teste"
        />
        <ChannelMessage 
          author="Lucas de Castro"
          date="20/07/2020"
          content="Mensagem de teste"
        />
        <ChannelMessage 
          author="Lucas de Castro"
          date="20/07/2020"
          content="Mensagem de teste"
        />
        <ChannelMessage 
          author="Lucas de Castro"
          date="20/07/2020"
          content="Mensagem de teste"
        />
        <ChannelMessage 
          author="Lucas de Castro"
          date="20/07/2020"
          content="Mensagem de teste"
        />
        <ChannelMessage 
          author="Lucas de Castro"
          date="20/07/2020"
          content="Mensagem de teste"
        />
        <ChannelMessage 
          author="Lucas de Castro"
          date="20/07/2020"
          content="Mensagem de teste"
        />
        <ChannelMessage 
          author="Lucas de Castro"
          date="20/07/2020"
          content="Mensagem de teste"
        />
        <ChannelMessage 
          author="Lucas de Castro"
          date="20/07/2020"
          content="Mensagem de teste"
        />
        <ChannelMessage 
          author="Lucas de Castro"
          date="20/07/2020"
          content="Mensagem de teste"
        />
        <ChannelMessage 
          author="Lucas de Castro"
          date="20/07/2020"
          content="Mensagem de teste"
        />
        <ChannelMessage 
          author="Lucas de Castro"
          date="20/07/2020"
          content="Mensagem de teste"
        />
        
        <ChannelMessage 
          author="Higor Melo"
          date="20/07/2020"
          content={
            <>
              <Mention>@Lucas de Castro</Mention>, me ensina a não feedar
              por favor
            </>
          }
          hasMention
          isBot
        />
      </Messages>
      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
}

export default ChannelData;