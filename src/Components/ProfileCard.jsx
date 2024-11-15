import React from 'react';
import styles from './profileCard.module.css';
import heartIcon from '../img/likeTinder.png';
import crossIcon from '../img/cross.png';

const ProfileCard = ({ image }) => {
    return (
        <div className={styles.card}>
            <img src={image} alt="Profile" className={styles.profileImage} />
            <div className={styles.actions}>
                <button className={styles.actionButton}>
                    <img className={styles.actionButtonLike} src={heartIcon} alt="Like" />
                </button>
                <button className={styles.actionButton}>
                    <img className={styles.actionButtonCross} src={crossIcon} alt="Dislike" />
                </button>
            </div>
        </div>
    );
};

export default ProfileCard;
