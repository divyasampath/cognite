import { useState } from 'react';
import './messageInput.css';

const emojiList = ['😀','😂','😍','😎','😭','😅','👍','🙏','🔥','🎉','❤️','😢','😡','😱','🥳','🤔','😇','😜','😏','😬','😴'];

const MessageInput = ({ onSend }: { onSend: (text: string) => void }) => {
  const [text, setText] = useState('');
  const [showEmojis, setShowEmojis] = useState(false);

  const handleEmojiClick = (emoji: string) => {
    setText(text + emoji);
    setShowEmojis(false);
  };

  return (
    <div style={{ position: 'relative' }}>
      <form
        className="message-input-bar"
        onSubmit={e => {
          e.preventDefault();
          if (text.trim()) {
            onSend(text);
            setText('');
          }
        }}
      >
        <button
          type="button"
          style={{ background: 'none', border: 'none', fontSize: 22, cursor: 'pointer', marginRight: 4 }}
          onClick={() => setShowEmojis(v => !v)}
          aria-label="Pick emoji"
        >
          😊
        </button>
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Type a message..."
        />
        <button type="submit">Send</button>
      </form>
      {showEmojis && (
        <div style={{ position: 'absolute', bottom: 48, left: 0, background: '#fff', border: '1px solid #eee', borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: 8, zIndex: 10, display: 'flex', flexWrap: 'wrap', width: 260 }}>
          {emojiList.map(emoji => (
            <span
              key={emoji}
              style={{ fontSize: 22, padding: 6, cursor: 'pointer' }}
              onClick={() => handleEmojiClick(emoji)}
            >
              {emoji}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default MessageInput;
