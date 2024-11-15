import React, { useState } from 'react';
import { ArrowLeft, Send } from 'lucide-react';
import styles from './individualChat.module.css';

const IndividualChat = ({ user, onBack }) => {
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      text: 'Привет, как дела, сколько лет, как настроение?',
      timestamp: 'Сегодня 12:05',
      isUser: false
    },
    {
      id: 2,
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting...',
      timestamp: 'Сегодня 12:06',
      isUser: true
    }
  ]);

  const handleSend = () => {
    if (message.trim()) {
      setChatMessages([...chatMessages, {
        id: Date.now(),
        text: message,
        timestamp: 'Сегодня ' + new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
        isUser: true
      }]);
      setMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button onClick={onBack} className={styles.backButton}>
          <ArrowLeft className={styles.backIcon} />
        </button>
        <div className={styles.userInfo}>
          <img
            src={user.avatar}
            alt={user.name}
            className={styles.avatar}
          />
          <span className={styles.userName}>{user.name}</span>
        </div>
      </div>

      <div className={styles.messagesContainer}>
        {chatMessages.map((msg) => (
          <div
            key={msg.id}
            className={`${styles.messageWrapper} ${msg.isUser ? styles.userMessage : styles.receivedMessage}`}
          >
            {!msg.isUser && (
              <img
                src={user.avatar}
                alt="avatar"
                className={styles.messageAvatar}
              />
            )}
            <div className={styles.messageContent}>
              <div className={styles.messageText}>{msg.text}</div>
              <div className={styles.messageTime}>{msg.timestamp}</div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.inputContainer}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Твоё сообщение....."
          className={styles.input}
        />
        <button 
          onClick={handleSend} 
          className={styles.sendButton}
        >
          <Send className={styles.sendIcon} />
        </button>
      </div>
    </div>
  );
};

export default IndividualChat;