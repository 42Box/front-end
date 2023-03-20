import { useState, useEffect } from 'react';
import styles from '../Home.module.css';
import Body from '../Body';

function Home () {
    function useImage(src) {
        const [loaded, setLoaded] = useState(false);
        const [error, setError] = useState(false);
        useEffect(() => {
            const img = new Image();
            img.onload = () => {
            setLoaded(true);
            };
            img.onerror = () => {
            setError(true);
            };
            img.src = src;
        }, [src]);
        return { loaded, error };
    }
    const { loaded, error } = useImage(process.env.PUBLIC_URL + "/images/png/tree.png")
    if (error) {
        return <div>Error loading image</div>
    }
    return (
        <div>
        {loaded ?
            <div className={styles.background}>
                <Body />
            </div>
        :
            <div>
                <img className={styles.imageSearching} src="/images/png/searching.png" />
                <h1 className={styles.loading}>Loading...</h1>
            </div>
        }
        </div>
    );
}

export default Home