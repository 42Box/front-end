import styles from '../Home.module.css';
import Body from '../Body';

function Home () {
    return (
        <div className={styles.background}>
            <Body />
        </div>
    );
}

export default Home