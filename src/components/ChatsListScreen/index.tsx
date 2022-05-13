import React from 'react';
import ChatsList from "./ChatsList";
import ChatsNavbar from "./ChatsNavbar";

const ChatListScreen: React.FC = () => (
    <>
        <ChatsNavbar />
        <ChatsList />
    </>
)

export default ChatListScreen;

