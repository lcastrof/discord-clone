import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  padding: 4px 16px;
  margin-right: 4px;

  background-color: transparent;

  .message {
    display: flex;
    flex-direction: column;
  }

  & + div {
    margin-top: 13px;
  }
`;
