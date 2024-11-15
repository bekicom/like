import React, { useState } from 'react';
import styles from './StatBox.module.css';
import hintIcon from '../img/hint.svg';
import Hint from './Hint'; // Import the Hint component

const StatBox = ({ label, value }) => {
    const [isHintVisible, setIsHintVisible] = useState(false);

    const toggleHint = () => {
        setIsHintVisible(prev => !prev);
    };

    return (
        <div className={styles.statBox}>
            <div className={styles.statHeader}>
                {/* Hint Icon */}
                <img
                    className={styles.imgHint}
                    src={hintIcon}
                    alt="Hint"
                    onClick={toggleHint} /* Toggle Hint visibility */
                />
                <span className={styles.statLabel}>{label}</span>
            </div>
            <span className={styles.statValue}>{value}</span>

            {/* Show Hint based on click */}
            {isHintVisible && <Hint />}
        </div>
    );
};

export default StatBox;
