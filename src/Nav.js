import { useState } from "react";
import { Link } from "react-router-dom";
import styles from './Nav.module.css';

function Nav({ userInfo }) {
    const [search, setSearch] = useState();
    const onChange = (event) => {
        setSearch(event.target.value);
        console.log(search);
    }
    return (
        <div className={styles.nav}>
            {(userInfo !== undefined)
                ? <div className={styles.item1}>{userInfo.login}</div>
                : null
            }
            {(userInfo !== undefined)
                ?
                // <form>
                    // TODO : https://www.daleseo.com/react-forms/ 참고!
                    <div className={styles.item2}>
                        <input
                            onChange={onChange}
                            value={search}
                            className={styles.search}
                            type="search"
                            placeholder="search (projects /intraID)" />
                        <Link to={`https://profile.intra.42.fr/searches/search?query=${search}`}>
                            <button className={styles.button}>Search!</button>
                        </Link>
                    </div>
                // </form>
                :
                <div className={styles.item3}>
                    <Link to={`${process.env.REACT_APP_REDIRECTION}`}>
                        <button className={styles.button}>
                                LOGIN
                        </button>
                    </Link>
                </div>
            }
            {(userInfo !== undefined)
                ? <div className={styles.item3}>
                    <img className={styles.user} src={userInfo.image.link} />
                </div>
                : null
            }
        </div>
    );
}

export default Nav;