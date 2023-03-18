import styles from './Quick.module.css'

function Quick({ coalition }) {
    return (
        <div>
            {coalition === undefined
                ? null
                : <div>
                    <div className={styles.quick}>
                        <button className={styles.myButton}>click!</button>
                        <button className={styles.myButton}>click!</button>
                        <button className={styles.myButton}>click!</button>
                        <button className={styles.myButton}>click!</button>
                    </div>
                </div>
            }

            <div className={styles.planetBackground}></div>
            <div className={`${styles.box} ${styles.grid}`}>
            </div>

        </div>
    );
}

export default Quick;