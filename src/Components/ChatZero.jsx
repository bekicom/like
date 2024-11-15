import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import IndividualChat from './individualChat';  // Import the IndividualChat component
import Adelina from "../img/girlChat.png"
import Vlada from "../img/vlada.png"
import Anjelika from "../img/anjelika.png"
import Antonina from "../img/antonina.png"
import styles from './likePart.module.css';
import styles2 from './chat.module.css';
import Register from './Register';
import dolphin from '../img/dolphin.svg';

const Chat = () => {
    // Otherwise show the chat list
  
    return (
       
        <div className={styles2.main}>
            <Header />
            <div className={styles2.chatContainer}>
                <h1 className={styles2.title}>Чат</h1>
                <div className={styles2.searchContainer}>
                    <input
                        type="text"
                        placeholder="Поиск по имени"
                        className={styles2.searchInput}
                        
                    />
                </div>
                <div className={styles.contentContainer}>
                        <img src={dolphin} alt="Whale Icon" />
                        <p className={styles.message}>Ничего не найдено.</p>
                      
                    </div>
            </div>
            <Footer />
        </div>
    );
};

export default Chat;