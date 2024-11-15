import React from 'react';
import styles from './Payment.module.css';
import { useNavigate } from 'react-router-dom';
import VisaIcon from '../img/visa.svg'; // Add your payment icons
import MirIcon from '../img/mir.svg';
import MasterCardIcon from '../img/mastercard.svg';
import CloudPaymentIcon from '../img/cloud.svg';
import Footer from './Footer';
import analizeActiv from "../img/first.png"
import searchHideFriends from "../img/second.png"
import analizeGroups from "../img/last.png"

const Payment = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.pageContainer}> {/* Flex container */}
            <div className={styles.mainContent}> {/* Main content is scrollable */}
                <div className={styles.container}>
                    {/* Header */}
                    <div className={styles.header}>
                        <button onClick={() => navigate(-1)} className={styles.backButton}>
                            ←
                        </button>
                        <h1 className={styles.title}>Оплата тарифа</h1>
                    </div>

                    {/* Tariff Card */}
                    <div className={styles.tariffCard}>
                        <div className={styles.trialBadge}>7 дней</div>
                        <div className={styles.tariffInfo}>
                            <div className={styles.leftContent}>
                                <h2 className={styles.tariffName}>Пробный</h2>
                                <div className={styles.tariffDetails}>
                                    <span>Все функции</span>
                                    <span>Премиум за 14р!</span>
                                    <span>Далее - 999/10 дней.</span>
                                </div>
                            </div>
                            <div className={styles.priceContainer}>
                                <div className={styles.currentPrice}>14₽</div>
                                <div className={styles.oldPrice}>999₽</div>
                            </div>
                        </div>
                    </div>

                    {/* Features Grid */}
                    <div className={styles.featuresGrid}>
                        <div className={styles.featureCard}>
                            <img src={analizeActiv} className={styles.featureIcon}></img>
                            <p className={styles.featureText}>Анализ активности</p>
                        </div>
                        <div className={styles.featureCard}>
                        <img src={searchHideFriends} className={styles.featureIcon}></img>
                        <p className={styles.featureText}>
                                Поиск<br />скрытых<br />друзей
                            </p>
                        </div>
                        <div className={styles.featureCard}>
                        <img src={analizeGroups} className={styles.featureIcon}></img>
                        <p className={styles.featureText}>
                                Анализ<br />групп и<br />сообществ
                            </p>
                        </div>
                    </div>

                    {/* Payment Button */}
                    <button className={styles.paymentButton}>
                        ПРОИЗВЕСТИ ОПЛАТУ
                    </button>

                    {/* Terms and Conditions */}
                    <div className={styles.termsContainer}>
                        <label className={styles.checkbox}>
                            <input type="checkbox" />
                            <span className={styles.checkmark}></span>
                            <span className={styles.termsText}>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                            </span>
                        </label>

                        <label className={styles.checkbox}>
                            <input type="checkbox" />
                            <span className={styles.checkmark}></span>
                            <span className={styles.termsText}>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                            </span>
                        </label>
                    </div>

                    {/* Payment Methods */}
                    <div className={styles.paymentMethods}>
                        <img src={VisaIcon} alt="Visa" className={styles.paymentIcon} />
                        <img src={MirIcon} alt="Mir" className={styles.paymentIcon} />
                        <img src={MasterCardIcon} alt="MasterCard" className={styles.paymentIcon} />
                        <img src={CloudPaymentIcon} alt="Cloud Payment" className={styles.paymentIcon} />
                    </div>
                </div>
            </div>

            <Footer /> {/* Footer at the bottom */}
        </div>
    );
};

export default Payment;
