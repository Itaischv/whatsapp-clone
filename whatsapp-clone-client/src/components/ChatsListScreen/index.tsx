import React from 'react';
import ChatsList from './ChatsList';
import ChatsNavbar from './ChatsNavbar';
import styled from 'styled-components';

// Styles

const Container = styled.div`
  height: 100vh;
`;
const ChatListScreen: React.FC = () => (
  <Container>
    <ChatsNavbar />
    <ChatsList />
  </Container>
);

export default ChatListScreen;
