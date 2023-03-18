import { Link } from "react-router-dom";
import styles from './Nav.module.css';

function Nav({ userInfo }) {
    return (
        <div className={styles.nav}>
            {(userInfo !== undefined)
                ? <div className={styles.item1}>{userInfo.login}</div>
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
                        <button className={styles.button} type="submit">Search!</button>
                    </div>
                </form>
                :
                <div className={styles.item3}>
                    <form name="upperSearchForm" method="get" action="result.html">
                        <fieldset>
                            <button className={styles.button}>
                                <Link to="https://api.intra.42.fr/oauth/authorize?client_id=u-s4t2ud-b0c9174e63ee41df6b61db393b535bfc1e923ff7bf4166dddee4ddcb231d7533&redirect_uri=http%3A%2F%2Flocalhost%3A4242%2Fhome&response_type=code">
                                    LOGIN
                                </Link>
                            </button>
                        </fieldset>
                    </form>
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