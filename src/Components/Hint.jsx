import React from 'react';
import styles from './hint.module.css';

const Hint = () => {
    return (
        <div >
            {/* Hint Balloon */}
            <div className={styles.hintBalloon}>
                {/* Hint Text */}
                <div className={styles.hintText}>Общее количество лайков профиля</div>
            </div>
        </div>
    );
};

export default Hint;
