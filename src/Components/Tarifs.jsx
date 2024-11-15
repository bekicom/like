import React, { useState } from 'react';
import styles from './tarifs.module.css';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import tarifImg from "../img/tarifImg.png";

const Tarifs = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [accountStatus, setAccountStatus] = useState('Не активирован');
  const [dayCount, setDayCount] = useState(0);
  // Dummy data for tariff plans
  const tariffPlans = [
    {
      id: 1,
      name: 'Пробный',
      price: '14₽',
      nextPrice: '999₽/10 дней',
      features: [
        'Анализ активности',
        'Возможно скрытые друзья',
        'Кого часто посещает'
      ]
    },
    {
      id: 2,
      name: 'Базовый',
      price: '99₽',
      nextPrice: '999₽/месяц',
      features: [
        'Анализ активности',
        'Возможно скрытые друзья',
        'Кого часто посещает',
        'Статистика публикаций',
        'Расширенный поиск'
      ]
    },
    {
      id: 3,
      name: 'Премиум',
      price: '199₽',
      nextPrice: '1999₽/месяц',
      features: [
        'Анализ активности',
        'Возможно скрытые друзья',
        'Кого часто посещает',
        'Статистика публикаций',
        'Расширенный поиск',
        'Отслеживание изменений',
        'Уведомления о новых постах'
      ]
    }
  ];

  const handleTariffClick = (index) => {
    setActiveIndex(index);
  };

  const handleActivate = () => {
    setAccountStatus('Активирован');
    setDayCount(30);
  };

  return (
    <div className="wrap">
      <div className={styles.appContainer}>
        <h1 className={styles.payTarif}>Оплата тарифа</h1>

        {/* Header Section */}
        <div className={styles.header}>
          <div className={styles.accountStatus}>
            <div>
              <p>Статус аккаунта</p>
              <span>{accountStatus}</span>
            </div>
            <div>
              <p>Количество дней</p>
              <span>{dayCount} дней</span>
            </div>
          </div>
          {accountStatus === 'Не активирован' && (
            <button className={styles.activateBtn} onClick={handleActivate}>
              Активировать
            </button>
          )}
        </div>

        {/* Scrollable Tariff Section */}
        <div className={styles.tariffContainer}>
          {tariffPlans.map((tariff, index) => (
            <div
            key={tariff.id}
            onClick={() => handleTariffClick(index)}
            className={`${styles.tariffCard} ${
              activeIndex === index ? styles.active : ''
            }`}
          >
            <p>{tariff.name}</p>
            <h2>{tariff.price}</h2>
            <span>{tariff.nextPrice}</span>
          </div>
          
          ))}
        </div>

        {/* Information Cards */}
        {activeIndex !== null && (
          <div className={styles.infoCards}>
            {tariffPlans[activeIndex].features.map((feature, index) => (
              <div key={index} className={styles.infoCard}>
                <div className={styles.img}>
                  <img src={tarifImg} alt="" />
                </div>
                <div className={styles.infoCardText}>
                  <p>{feature}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        <button className={styles.subscribeBtn}>Подписаться за {tariffPlans[activeIndex]?.price}</button>
      </div>
      <Footer />
    </div>
  );
};

export default Tarifs;