import React from 'react';
import Skeleton from 'react-loading-skeleton';

import { Container } from './styles';

const MessageSkeleton: React.FC = () => {
  return (
    <Container>
      <Skeleton circle={true} width={40} height={40} />
      <div className="message">
        <Skeleton width={150} height={10} style={{ marginLeft: 17 }} />
        <Skeleton width={300} height={10} style={{ marginLeft: 17 }} />
      </div>
    </Container>
  );
};

export default MessageSkeleton;
