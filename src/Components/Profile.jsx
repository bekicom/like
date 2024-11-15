// ProfilePage.js
import React, { useState, useEffect } from 'react';
import styles from './profile.module.css';
import personImage from '../img/personImage.svg';
import { useNavigate } from 'react-router-dom';
import PremiumAlert from './PremiumAlert';
import ReceivedLikes from './ReceivedLikes';
import Footer from './Footer';
import StatBox from './StatBox';


const ProfilePage = () => {
    const navigate = useNavigate();
    const [showAlert, setShowAlert] = useState(false);

    const profileData = {
        name: 'Anatol Petrov',
        posts: 39,
        followers: 822,
        friends: 713,
        likes: 1067,
        views: 10059,
        gifts: 6,
        comments: 18,
        reposts: 22,
        path: "/history"
    };

    useEffect(() => {
        if (showAlert) {
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        } else {
            document.body.style.overflow = 'auto'; // Restore scrolling
        }
        return () => {
            document.body.style.overflow = 'auto'; // Clean up on unmount
        };
    }, [showAlert]);

    return (
        <div>
            <div className={styles.profileContainer}>
                {/* Profile Header */}
                <div className={styles.profileHeader}>

                    <div className={styles.personIcon}>
                        <img
                            src={personImage}
                            alt="Profile"
                            className={styles.profileAvatar}
                        />
                    </div>
                    {/* Top Stats */}
                    <div className={styles.mainDiv}>

                        <div>
                            <span className={styles.profileName}>{profileData.name}</span>

                        </div>
                        <div className={styles.topStats}>
                            <div className={styles.topStatItem}>
                                <div className={styles.topStatLabel}>Посты</div>
                                <div className={styles.topStatValue}>{profileData.posts}</div>
                            </div>
                            <div className={styles.topStatItem}>
                                <div className={styles.topStatLabel}>Подписчики</div>
                                <div className={styles.topStatValue}>{profileData.followers}</div>
                            </div>
                            <div className={styles.topStatItem}>
                                <div className={styles.topStatLabel}>Друзья</div>
                                <div className={styles.topStatValue}>{profileData.friends}</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className={styles.statsGrid}>
                    <StatBox label="Лайки" value={profileData.likes} />
                    <StatBox label="Посты" value={profileData.posts} />
                    <StatBox label="Просмотры" value={profileData.views} />
                    <StatBox label="Комментарии" value={profileData.comments} />
                    <StatBox label="Подарки" value={profileData.gifts} />
                    <StatBox label="Репосты" value={profileData.reposts} />
                </div>

                {/* Received Likes Section */}
                <ReceivedLikes />

                {showAlert && <PremiumAlert onClose={() => setShowAlert(false)} />}
            </div>

            <Footer />
        </div>
    );
};

export default ProfilePage;
