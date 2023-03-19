import { useEffect, useState } from 'react';
import { json, Link } from "react-router-dom";
import styles from './Quick.module.css';

function Quick({ coalition }) {
    const [urls, setUrls] = useState([]);
    const [url, setUrl] = useState("");
    const onChange = (event) => {
      setUrl(event.target.value);
    }
    const onSubmit = (event) => {
      event.preventDefault();
      if (url === "") {
        return ;
      }
      setUrls([...urls, { text: url }]);
      setUrl("");
    }
    useEffect(() => {
        const storedUrls = localStorage.getItem('urls');
        if (storedUrls) {
            setUrls(JSON.parse(storedUrls));
        }
    }, []);
    useEffect(() => {
        localStorage.setItem('urls', JSON.stringify(urls));
    }, [urls]);
    return (
        <div>
            {coalition === undefined
                ? null
                : <div>
                    <div className={styles.quick}>
                        <form onSubmit={onSubmit}>
                            <input 
                            onChange={onChange} 
                            value={url} 
                            type="text" 
                            placeholder="input url"/>
                            <button>ADD</button>
                        </form>
                        {urls.map((item, index) => (<Link to={item}><button className={styles.myButton} key={index}>{item.text}</button></Link>))}
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