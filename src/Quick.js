import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import styles from './Quick.module.css';

function Quick() {
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
            <div className={styles.quick}>
                <form className={styles.form} onSubmit={onSubmit}>
                    <input 
                    onChange={onNameChange} 
                    className={styles.input}
                    value={name} 
                    type="text" 
                    placeholder="Bookmark Name"/>
                    <input 
                    onChange={onUrlChange} 
                    className={styles.input}
                    value={url} 
                    type="text" 
                    placeholder="Bookmark URL"/>
                    <button className={`${styles.custom} ${styles.btn2}`}><span>+</span></button>
                </form>
                <div className={styles.item}>
                {urls.map((item, index) => (
                    <div>
                        <Link to={item.text}><button className={`${styles.custom_btn} ${styles.btn1}`} key={index}><span>{item.text}</span><span>{item.name}</span></button></Link>
                        <button onClick={() => handleDelete(index)} className={`${styles.custom} ${styles.btn3}`}><span>X</span></button>
                    </div>
                ))}
                </div>
            </div>
            <div className={styles.planetBackground}></div>
            <div className={`${styles.box} ${styles.grid}`}>
            </div>

        </div>
    );
}

export default Quick;