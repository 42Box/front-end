import { useEffect, useState } from "react";
import styles from '../Home.module.css';
import Nav from '../Nav';
import Body from '../Body';

function Home () {
    const token = localStorage.getItem('token');
    const [userInfo, setUserInfo] = useState();
    const [coalition, setCoalition] = useState();
    const [event, setEvent] = useState();
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
    const getEvent = async () => {
        const bearer = 'Bearer ';
        const json = await (
            await fetch(`https://api.intra.42.fr/v2/campus/29/cursus/${userInfo.cursus_users[1].cursus_id}/events`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: bearer + token,
                    'response-Type': 'text',
                },
            })
        ).json();
        console.log(json); 
        setEvent(json);
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
        if (userInfo !== undefined) {
            getEvent();
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