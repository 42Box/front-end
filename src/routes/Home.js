import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from '../Home.module.css';
import Nav from '../Nav';
import Body from '../Body';

function Home () {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const [loading, setLoading] = useState(true);
    const [userInfo, setUserInfo] = useState();
    const [coalition, setCoalition] = useState();
    const getUserInfo = async () => {
        const bearer = 'Bearer ';
        const json = await (
            await fetch('https://api.intra.42.fr/v2/me', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: bearer + token,
                    'response-Type': 'text',
                },
            })
        ).json();
        if (!json.login) {
            localStorage.removeItem('token');
            navigate('/');
        }
        setUserInfo(json);
    }
    const getCoalition = async () => {
        const bearer = 'Bearer ';
        const json = await (
            await fetch(`https://api.intra.42.fr/v2/users/${userInfo.id}/coalitions`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: bearer + token,
                    'response-Type': 'text',
                },
            })
        ).json();
        setCoalition(json);
    }
    useEffect(() => {
        if (token) {
            getUserInfo();  
        }
    }, []);
    useEffect(() => {
        if (userInfo !== undefined) {
            getCoalition();
        }
    }, [userInfo]);
    useEffect(() => {
        if (coalition) {
            setLoading(false);
        }
    }, [coalition])
    return (
        <div className={styles.background}>
            { token && loading ?
            <div>
                <img className={styles.imageSearching} src={process.env.PUBLIC_URL + "/images/png/searching.png"} />
                <h1 className={styles.loading}>Loading...</h1>
            </div>
            :
            <div>
                <Nav userInfo={userInfo} />
                <Body userInfo={userInfo} coalition={coalition}/>
            </div>
            }
        </div>
    );
}

export default Home