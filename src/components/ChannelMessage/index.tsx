import React from 'react';

import { Container, Avatar, Message, Header, Content } from './styles';
import MessageSkeleton from '../MessageSkeleton';
export { Mention } from './styles';

export interface Props {
  author: string;
  date: string;
  content: string | React.ReactElement | React.ReactNode;
  hasMention?: boolean;
  isBot?: boolean;
  isLoading?: boolean;
}

const ChannelMessage: React.FC<Props> = ({
  author,
  date,
  content,
  hasMention,
  isBot,
  isLoading
}) => {
  return (
    <>
      {isLoading ? (
        <MessageSkeleton />
      ) : (
        <Container className={hasMention ? 'mention' : ''}>
          <Avatar className={isBot ? 'bot' : ''} />

          <Message>
            <Header>
              <strong>{author}</strong>

              {isBot && <span>Bot</span>}

              <time>{date}</time>
            </Header>
            <Content>{content}</Content>
          </Message>
        </Container>
      )}
    </>
  );
}

export default ChannelMessage;