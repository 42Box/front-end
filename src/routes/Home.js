import { useEffect, useState } from "react";
import styles from '../Home.module.css';
import Nav from '../Nav';
import Body from '../Body';

function Home () {
    const token = localStorage.getItem('token');
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
    }, [localStorage]);
    useEffect(() => {
        if (userInfo !== undefined) {
            getCoalition();
        }
    }, [userInfo]);
    return (
        <div className={styles.background}>
            <Nav userInfo={userInfo} />
            <Body userInfo={userInfo} coalition={coalition}/>
        </div>
    );
}

export default Home