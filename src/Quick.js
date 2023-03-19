import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import styles from './Quick.module.css';

function Quick({ coalition }) {
    const [urls, setUrls] = useState([]);
    const [url, setUrl] = useState("");
    const [name, setName] = useState("");
    const onUrlChange = (event) => {
      setUrl(event.target.value);
    };
    const onNameChange = (event) => {
        setName(event.target.value);
    };
    const onSubmit = (event) => {
      event.preventDefault();
      if (url === "" || name === "") {
        return ;
      }
      setUrls([...urls, { text: url, name: name }]);
      setUrl("");
      setName("");
    };
    const handleDelete = (index) => {
        const updatedUrls = urls.filter((url, i) => i !== index);
        setUrls(updatedUrls);
        localStorage.setItem('urls', JSON.stringify(updatedUrls));
    };
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
                        <form className={styles.form} onSubmit={onSubmit}>
                            <input 
                            onChange={onNameChange} 
                            className={styles.input}
                            value={name} 
                            type="text" 
                            placeholder="Shortcut Name"/>
                            <input 
                            onChange={onUrlChange} 
                            className={styles.input}
                            value={url} 
                            type="text" 
                            placeholder="Shortcut URL"/>
                            <button className={styles.addButton}>+</button>
                        </form>
                        <div className={styles.item}>
                        {urls.map((item, index) => (
                            <div>
                                <Link to={item.text}><button className={styles.myButton} key={index}>{item.name}</button></Link>
                                <button onClick={() => handleDelete(index)} className={styles.deleteButton}>x</button>
                            </div>
                        ))}
                        </div>
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