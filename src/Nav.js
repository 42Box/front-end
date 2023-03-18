import { Link } from "react-router-dom";
import styles from './Nav.module.css';
import Title from "./Title";

function Nav({ userInfo }) {
    return (
        <div className={styles.nav}>
            {(userInfo !== undefined)
                ? <Title userInfo={userInfo} />
                : null
            }
            {(userInfo !== undefined)
                ?
                <form>
                    {/* TODO : https://www.daleseo.com/react-forms/ 참고!*/}
                    <div className={styles.item2}>
                        <input
                            className={styles.search}
                            type="search"
                            placeholder="search (projects /intraID)" />
                        <form name="upperSearchForm" method="get" action="result.html">
                            <button className={styles.button} type="submit">Search!</button>
                        </form>
                    </div>
                </form>
                :
                <div className={styles.item3}>
                    <Link to={`https://api.intra.42.fr/oauth/authorize?client_id=${process.env.REACT_APP_UID}&redirect_uri=http%3A%2F%2Flocalhost%3A4242%2Fhome&response_type=code`}>
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