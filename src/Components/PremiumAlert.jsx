// PremiumAlert.js
import React from 'react';
import styles from './premiumAlert.module.css'; // Create a separate CSS module for styling
import Crown from "../img/crown.svg"
import { useNavigate } from 'react-router-dom';

const PremiumAlert = ({ onClose }) => {
    const navigate = useNavigate();

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <div className={styles.icon}>
                    <img src={Crown} alt="" />
                </div>
                <h2 className={styles.premiumH2}>Premium доступ</h2>
                <p className={styles.premiumP}>
                    Чтобы отправлять сообщения, просматривать фотографии в чате и узнавать, кто поставил "Лайк", необходимо приобрести Premium доступ.
                </p>
                <div className={styles.buttons}>
                    <button key="/tarifs" onClick={() => navigate("/tarifs")} className={styles.premiumButton}>Купить Premium</button>
                    <button className={styles.closeButton} onClick={onClose}>Закрыть</button>
                </div>
            </div>
        </div>
    );
};

export default PremiumAlert;
