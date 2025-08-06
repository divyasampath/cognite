import React from 'react';
import type { Friend } from '../../types/index';
import './friendList.css';

interface FriendListProps {
  friends: Friend[];
  selectedId: string;
  onSelect: (id: string) => void;
}

const FriendList: React.FC<FriendListProps> = ({ friends, selectedId, onSelect }) => (
  <div className="friend-list">
    <h2>Friends</h2>
    <ul>
      {friends.map(friend => (
        <li
          key={friend.id}
          className={friend.id === selectedId ? 'selected' : ''}
          onClick={() => onSelect(friend.id)}
          style={{ display: 'flex', alignItems: 'center', gap: 12 }}
        >
          <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#e3e7ef', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, color: '#6600cc', fontSize: 18 }}>
            {friend.name.split(' ').map(n => n[0]).join('').toUpperCase()}
          </div>
          <span>{friend.name}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default FriendList;
