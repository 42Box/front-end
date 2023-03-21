import { useState } from "react";
import styles from './Nav.module.css';

function Nav() {
    const [search, setSearch] = useState();
    const onChange = (event) => {
        setSearch(event.target.value);
        console.log(search);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        window.location.href = `https://google.com/search?q=${search}`;
    };
    return (
        <div className={styles.nav}>
            <div className={styles.item2}>
                <form onSubmit={onSubmit}>
                <input
                    onChange={onChange}
                    value={search}
                    className={styles.search}
                    type="search"
                    placeholder="Google search" />
                    <button className={styles.button} type="submit">Search</button>
                </form>
            </div>
        </div>
    );
}

export default Nav;