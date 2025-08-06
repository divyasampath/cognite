import { useState } from 'react';
import ChatWindow from './components/chatWindow';
import FriendList from './components/friendList';
import MessageInput from './components/messageInput';
import type { Friend, Message } from './types';

const App = () => {
  const [friends, setFriends] = useState<Friend[]>([
    {
      id: '1',
      name: 'Alice',
      messages: [] as Message[],
    },
    {
      id: '2',
      name: 'Bob',
      messages: [] as Message[],
    },
  ]);

  const [selectedFriendId, setSelectedFriendId] = useState<string>('1');

  const handleSendMessage = (text: string) => {
    setFriends((prevFriends: Friend[]) =>
      prevFriends.map((friend: Friend) =>
        friend.id === selectedFriendId
          ? {
              ...friend,
              messages: [
                ...friend.messages,
                {
                  id: crypto.randomUUID(), // ✅ required for type compatibility
                  text,
                  sender: 'me',
                  timestamp: new Date(),
                },
              ],
            }
          : friend
      )
    );
  };

  const selectedFriend = friends.find((f) => f.id === selectedFriendId);
  const currentUser = { name: 'You' };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100vw', minHeight: '100vh', minWidth: '100vw', background: '#fff' }}>
      <header style={{ height: '8vh', minHeight: 48, background: '#d9b3ff', color: '#6600cc', display: 'flex', alignItems: 'center', padding: '0 2vw', fontSize: '2.4vw', fontWeight: 700, letterSpacing: 2, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
        <span role="img" aria-label="whisper" style={{ marginRight: '1vw' }}>💬</span>Whispr
      </header>
      <div style={{ display: 'flex', gap: '2vw', padding: '2vw', flex: 1, alignItems: 'flex-start', width: '100vw', height: '92vh', boxSizing: 'border-box' }}>
        <FriendList
          friends={friends}
          selectedId={selectedFriendId}
          onSelect={setSelectedFriendId}
        />
        {selectedFriend && (
          <div style={{ flex: 1, height: '100%' }}>
            <h2 style={{ margin: 0, marginBottom: '1.6vw', fontWeight: 600, fontSize: '2vw', color: '#222' }}>
              {selectedFriend.name}
            </h2>
            <ChatWindow messages={selectedFriend.messages as Message[]} friends={friends} currentUser={currentUser} />
            <MessageInput onSend={handleSendMessage} />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
