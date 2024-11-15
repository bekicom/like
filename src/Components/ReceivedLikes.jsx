import React, { useState } from 'react';
import styles from './ReceivedLikes.module.css';
import PremiumAlert from './PremiumAlert';
import Hint from './Hint';
import hintIcon from '../img/hint.svg';


const ReceivedLikes = () => {
    const [showAlert, setShowAlert] = useState(false);

    const sampleLikes = [
        { id: 1, user: "User 1", time: "2h ago" },
        { id: 2, user: "User 2", time: "3h ago" },
    ];
    const [isHintVisible, setIsHintVisible] = useState(false);

    const toggleHint = () => {
        setIsHintVisible(prev => !prev);
    };

    return (
        <div className={styles.container}>
            {/* Header */}

            {/* Blurred Content */}
            <div className={styles.contentWrapper}>
                <div className={styles.blurredContent}>
                    {sampleLikes.map(like => (
                        <div key={like.id} className={styles.likeItem}>
                            <div className={styles.userInfo}>
                                <div className={styles.userAvatar} />
                                <div className={styles.userDetails}>
                                    <p className={styles.userName}>{like.user}</p>
                                    <p className={styles.timeStamp}>{like.time}</p>
                                </div>
                            </div>
                            <div className={styles.likeIcon}>
                                <span className={styles.heartIcon}>❤️</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Overlay */}
                <div className={styles.overlay}>
            <div className={styles.header}>
                <img
                    className={styles.imgHint}
                    src={hintIcon}
                    alt="Hint"
                    onClick={toggleHint} /* Toggle Hint visibility */
                />
                <h2 className={styles.title}>Полученные лайки</h2>
            </div>
                    <p className={styles.activationText}>
                        Активируйте пробный тариф за 14₽, чтобы увидеть все инструменты сразу
                    </p>
                    <button
                        onClick={() => setShowAlert(true)}
                        className={styles.activateButton}
                    >
                        Активировать
                    </button>
                </div>
                {showAlert && <PremiumAlert onClose={() => setShowAlert(false)} />}
            </div>
            {isHintVisible && <Hint />}
        </div>
    );
};

export default ReceivedLikes;