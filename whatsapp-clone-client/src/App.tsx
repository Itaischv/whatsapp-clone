import React from 'react';
import logo from './logo.svg';
import './App.css';
import ChatsListScreen from './components/ChatsListScreen';
import ChatListScreen from './components/ChatsListScreen';

interface AppProps {
  name: String;
}

const App: React.FC<AppProps> = ({ name }) => {
  return (
    <>
      <ChatListScreen />
    </>
  );
};

export default App;
