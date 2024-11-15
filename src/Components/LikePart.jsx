import React, { useState, useEffect} from 'react';
import Header from './Header';
import Footer from './Footer';
import Register from './Register';
import styles from './likePart.module.css';
import dolphin from '../img/dolphin.svg';
import blurProf from '../img/blurProf.png';
import ProfileCard from './ProfileCard';

const LikePart = ({tab}) => {
    console.log(tab)
    const [showRegister, setShowRegister] = useState(false);
    const [activeTab, setActiveTab] = useState(tab);
    useEffect(() => {
        setActiveTab(tab);
    }, [tab]);   
    const handleRegisterClick = () => {
        setShowRegister(true);
    };

    const renderContent = () => {
        if (showRegister) {
            return <Register onClose={() => setShowRegister(false)} />;
        }

        switch (activeTab) {
            case 'likes':
                return (
                    <div className={styles.contentContainer}>
                        <img src={dolphin} alt="Whale Icon" />
                        <p className={styles.message}>Ничего не найдено.</p>
                        <p className={styles.message2}>Вас ещё никто не оценил. Создайте анкету, чтобы можно было найти собеседника.</p>
                        <button className={styles.button} onClick={handleRegisterClick}>
                            СОЗДАТЬ АНКЕТУ
                        </button>
                    </div>
                );
            case 'guests':
                return (

                    <div className={styles.mainGroup}>
                        <ProfileCard image={blurProf} />
                        <ProfileCard image={blurProf} />
                        <ProfileCard image={blurProf} />
                        <ProfileCard image={blurProf} />
                        <ProfileCard image={blurProf} />
                    </div>

                )
            case 'mutual':
                return (
                    <div className={styles.mainGroup}>
                    <div className={styles.card}>
                        <img src={blurProf} alt="Profile" className={styles.profileImage} />
                    </div>
                    <div className={styles.card}>
                        <img src={blurProf} alt="Profile" className={styles.profileImage} />
                    </div>
                    <div className={styles.card}>
                        <img src={blurProf} alt="Profile" className={styles.profileImage} />
                    </div>
                    <div className={styles.card}>
                        <img src={blurProf} alt="Profile" className={styles.profileImage} />
                    </div>
                    <div className={styles.card}>
                        <img src={blurProf} alt="Profile" className={styles.profileImage} />
                    </div>
                    </div>

                )
                return <div className={styles.contentContainer}><p>Здесь будут отображаться взаимные лайки.</p></div>;
            default:
                return null;
        }
    };

    return (
        <div className={styles.main}>
            <Header />
            {!showRegister && (
                <div className={styles.iconContainer}>
                    <div
                        className={`${styles.tab} ${activeTab === 'likes' ? styles.tabActive : ''}`}
                        onClick={() => setActiveTab('likes')}
                    >
                        Ваши лайки
                    </div>
                    <div
                        className={`${styles.tab} ${activeTab === 'guests' ? styles.tabActive : ''}`}
                        onClick={() => setActiveTab('guests')}
                    >
                        Гости
                    </div>
                    <div
                        className={`${styles.tab} ${activeTab === 'mutual' ? styles.tabActive : ''}`}
                        onClick={() => setActiveTab('mutual')}
                    >
                        Это взаимно
                    </div>
                </div>
            )}
            {renderContent()}
            <Footer />
        </div>
    );
};

export default LikePart;
