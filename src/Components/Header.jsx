import styles from "./header.module.css"
import Love from "../img/love.svg";
import Chat from "../img/chat.svg";
import LoveSearch from "../img/Logo.svg";
import Group from "../img/group.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import LikePart from "./LikePart";
const Header = () => {
    const navigate = useNavigate();
  
    const handleNavigation = (path) => {
      navigate(path);
    };

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={LoveSearch} alt="Logo" />
            </div>
            <div className={styles.iconGroup}>
                <div className={styles.iconWrapper} onClick={() => handleNavigation('/heart')} style={{ cursor: "pointer" }}>
                    <img src={Love} className={styles.icon} alt="Heart icon" />
                    <span className={styles.badge}>12</span>
                </div>
                <div className={styles.iconWrapper}>
                    <img src={Group} className={styles.icon} onClick={() => handleNavigation('/guests')} alt="Group icon" />
                    <span className={styles.badge}>12</span>
                </div>
                <div className={styles.iconWrapper}>
                    <img src={Chat} className={styles.icon} onClick={() => handleNavigation('/chat')} alt="Chat icon" />
                    <span className={styles.badge}>12</span>
                </div>
            </div>
        </header>
    );
};

export default Header;