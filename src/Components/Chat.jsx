import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import IndividualChat from './individualChat';  // Import the IndividualChat component
import styles from './chat.module.css';
import Adelina from "../img/girlChat.png"
import Vlada from "../img/vlada.png"
import Anjelika from "../img/anjelika.png"
import Antonina from "../img/antonina.png"

const Chat = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedUser, setSelectedUser] = useState(null);  // Add this state for navigation

    const messages = [
        {
            id: 1,
            name: 'Аделина',
            message: 'Молчишь?((',
            time: '11:30',
            avatar: Adelina 
        },
        {
            id: 2,
            name: 'Влада',
            message: 'Привет, как дела?))',
            time: '13:51',
            avatar: Vlada 
        },
        {
            id: 3,
            name: 'Анжелина',
            message: 'Привет, погуляем?)))',
            time: '13:51',
            avatar: Anjelika 
        },
        {
            id: 4,
            name: 'Антонина',
            message: 'У меня уже фантазия закончилась(',
            time: '13:51',
            avatar: Antonina
        },
    ];

    // Filter messages based on search term
    const filteredMessages = messages.filter(message =>
        message.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Handle click on a chat
    const handleChatClick = (user) => {
        setSelectedUser(user);
    };

    // Handle back button click
    const handleBack = () => {
        setSelectedUser(null);
    };

    // If a user is selected, show the individual chat
    if (selectedUser) {
        return <IndividualChat user={selectedUser} onBack={handleBack} />;
    }

    // Otherwise show the chat list
    return (
        <div className={styles.main}>
            <Header />
            <div className={styles.chatContainer}>
                <h1 className={styles.title}>Чат</h1>
                <div className={styles.searchContainer}>
                    <input
                        type="text"
                        placeholder="Поиск по имени"
                        className={styles.searchInput}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className={styles.messagesList}>
                    {filteredMessages.map((message) => (
                        <div 
                            key={message.id} 
                            className={styles.messageItem}
                            onClick={() => handleChatClick(message)}  // Add click handler
                        >
                            <div className={styles.avatarContainer}>
                                <img 
                                    src={message.avatar} 
                                    alt={message.name}
                                    className={styles.avatar}
                                />
                            </div>
                            <div className={styles.messageContent}>
                                <div className={styles.messageHeader}>
                                    <span className={styles.userName}>{message.name}</span>
                                    <span className={styles.messageTime}>{message.time}</span>
                                </div>
                                <p className={styles.messageText}>{message.message}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Chat;