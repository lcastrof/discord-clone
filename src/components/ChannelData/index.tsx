import React, {  useRef, useEffect, useCallback, useState } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon, Outlayer } from './styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';

const ChannelData: React.FC = () => {
  const [isScrolledUpwards, setIsScrolledUpwards] = useState(false);
  const [loading, setLoading] = useState(true);

  const selectChannelName = (state: RootState) => state.channels.channel.name;
  const activeChannel = useSelector(selectChannelName);

  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => { 
    const div = messagesRef.current;

    if(div) {
      div.scrollTop = div.scrollHeight;
    }

    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500);

    return () => clearTimeout(timer);
  }, [messagesRef]);

  const handleScrollUp = useCallback(() => {
    const div = messagesRef.current;

    if(div && div.scrollTop < 50) {
      setIsScrolledUpwards(true);
    } else {
      setIsScrolledUpwards(false);
    }
  }, [messagesRef]);

  const handleGoBack = useCallback(() => {
    const div = messagesRef.current;

    if(div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef} onScroll={handleScrollUp}>
        <ChannelMessage 
          author="Lucas de Castro"
          date="20/07/2020"
          content={`Mensagem de teste para o canal ${activeChannel}`}
          isLoading={loading}
        />
        <ChannelMessage 
          author="Lucas de Castro"
          date="20/07/2020"
          content={`Mensagem de teste para o canal ${activeChannel}`}
          isLoading={loading}
        />
        <ChannelMessage 
          author="Lucas de Castro"
          date="20/07/2020"
          content={`Mensagem de teste para o canal ${activeChannel}`}
          isLoading={loading}
        />
        <ChannelMessage 
          author="Lucas de Castro"
          date="20/07/2020"
          content={`Mensagem de teste para o canal ${activeChannel}`}
          isLoading={loading}
        />
        <ChannelMessage 
          author="Lucas de Castro"
          date="20/07/2020"
          content={`Mensagem de teste para o canal ${activeChannel}`}
          isLoading={loading}
        />
        <ChannelMessage 
          author="Lucas de Castro"
          date="20/07/2020"
          content={`Mensagem de teste para o canal ${activeChannel}`}
          isLoading={loading}
        />
        <ChannelMessage 
          author="Lucas de Castro"
          date="20/07/2020"
          content={`Mensagem de teste para o canal ${activeChannel}`}
          isLoading={loading}
        />
        <ChannelMessage 
          author="Lucas de Castro"
          date="20/07/2020"
          content={`Mensagem de teste para o canal ${activeChannel}`}
          isLoading={loading}
        />
        <ChannelMessage 
          author="Lucas de Castro"
          date="20/07/2020"
          content={`Mensagem de teste para o canal ${activeChannel}`}
          isLoading={loading}
        />
        <ChannelMessage 
          author="Lucas de Castro"
          date="20/07/2020"
          content={`Mensagem de teste para o canal ${activeChannel}`}
          isLoading={loading}
        />
        <ChannelMessage 
          author="Lucas de Castro"
          date="20/07/2020"
          content={`Mensagem de teste para o canal ${activeChannel}`}
          isLoading={loading}
        />
        <ChannelMessage 
          author="Lucas de Castro"
          date="20/07/2020"
          content={`Mensagem de teste para o canal ${activeChannel}`}
          isLoading={loading}
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
          isLoading={loading}
        />
      </Messages>
      
      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
        {isScrolledUpwards && 
          <Outlayer onClick={handleGoBack}>
            Voltar para mensagens mais recentes
          </Outlayer>
        }
      </InputWrapper>
    </Container>
  );
}

export default ChannelData;