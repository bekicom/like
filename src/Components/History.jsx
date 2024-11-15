import { useState } from 'react';
import styles from './history.module.css';
import Footer from './Footer';
import HistoryNotFound from './HistoryNotFound';
import personImage from '../img/personImage.svg';
import maximImage from '../img/maxim.svg';
import { useNavigate } from 'react-router-dom';

const History = () => {
    const navigate = useNavigate();
    // Static data - you can modify this array to test both empty and filled states
    const [historyItems] = useState([
        {
            id: 1,
            title: 'Anatol Petrov',
            date: '2024-03-15',
            description: 'обновлено: только что',
            image: personImage,
            path: "/profile"
        },
        {
            id: 2,
            title: 'Максим Герок',
            date: '2024-03-16',
            description: 'обновлено: только что',
            image: maximImage,
            path: "/profile"
        },
    ]);

    if (historyItems.length === 0) {
        return (
            <div className="main">
                <HistoryNotFound />
                <Footer />
            </div>
        );
    }

    // If array has items, show history list
    return (
        <div className="main">
            <div className={styles.container}>
                <div className={styles.heading}>Ваша история поиска:</div>
                <div className={styles.historyList}>
                    {historyItems.map((item) => (
                        <div key={item.id} onClick={() => navigate(item.path)} className={styles.historyItem}>
                            <div>
                                <img key={item.path}  className={styles.personImage} src={item.image} />
                         
                            </div>
                            <div className={styles.smallContainer}>
                                <h3 className={styles.itemTitle}>{item.title}</h3>
                                <h4 className={styles.itemDate}>{item.date}</h4>
                            </div>
                            <div className={styles.itemDescription}>{item.description}</div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default History;