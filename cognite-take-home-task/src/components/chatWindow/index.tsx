import React from 'react';
import type { Message, Friend } from '../../types';
import './chatWindow.css';

interface ChatWindowProps {
  messages: Message[];
  friends: Friend[];
  currentUser: { name: string };
}

const getInitials = (name: string) => name.split(' ').map(n => n[0]).join('').toUpperCase();

const ChatWindow: React.FC<ChatWindowProps> = ({ messages, friends, currentUser }) => (
  <div className="chat-window">
    {messages.map((msg) => {
      const senderInitials = msg.sender === 'me'
        ? getInitials(currentUser.name)
        : getInitials(msg.sender || '');
      return (
        <div
          key={msg.id}
          className={`message ${msg.sender === 'me' ? 'me' : 'other'}`}
        >
          {msg.sender !== 'me' && (
            <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#e3e7ef', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, color: '#6600cc', fontSize: 16, marginRight: 8 }}>
              {senderInitials}
            </div>
          )}
          <div className="bubble">{msg.text}</div>
          {msg.sender === 'me' && (
            <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#e3e7ef', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, color: '#6600cc', fontSize: 16, marginLeft: 8 }}>
              {senderInitials}
            </div>
          )}
        </div>
      );
    })}
  </div>
);

export default ChatWindow;
