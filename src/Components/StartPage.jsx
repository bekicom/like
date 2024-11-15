import styles from './startPage.module.css';
import Footer from './Footer';


const StartPage = () => {
    return (
        <div className="main">
            <div className={styles.container}>
                <div className={styles.heading}>Запустим проверку?</div>
                <div className={styles.subheading}>Введите в поле ниже ссылку на страницу ВК</div>
                <input type="text" placeholder='https://vk.com/' />

                <button className={styles.button}>НАЧАТЬ</button>

            </div>
            <Footer/>
        </div>



    );
};

export default StartPage;

