import styles from './history.module.css';
import Footer from './Footer';
import dolphin from '../img/dolphin.svg';

const StartPage = () => {
    return (
        <div className="main">
            <div className={styles.container}>
                <div className={styles.heading}>Ваша история поиска:</div>
                <img src={dolphin} className={styles.dolphin} alt="" />
                <div className={styles.subheading}>Ничего не найдено.</div>

            </div>
            <Footer />
        </div>



    );
};

export default StartPage;

