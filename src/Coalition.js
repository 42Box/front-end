import { useEffect, useState } from 'react';
import styles from './Coalition.module.css'

function Coalition() {
    const [memo, setMemo] = useState("");
    const onChange = (event) => {
        setMemo(event.target.value);
        localStorage.setItem("memo", event.target.value);
    };

    useEffect(() => {
        const storedMemo = localStorage.getItem("memo");
        if (storedMemo) {
            setMemo(storedMemo);
        }
    }, []);
    return (
        <div>
            <img className={styles.layer1} src={process.env.PUBLIC_URL + "/images/png/tree.png"} />
            <img className={styles.layer2} src={process.env.PUBLIC_URL + "/images/png/inside_box.png"} />
            <img className={styles.layer3} src={process.env.PUBLIC_URL + "/images/png/42box_logo.png"} />
            {/* <div className={styles.myCoalition}> */}
                {/* {coalition[0].name} */}
            {/* </div> */}
            {/* <div className={styles.coalition}> */}
                <textarea
                value={memo}
                onChange={onChange}
                className={styles.coalition}
                placeholder="📝 나만의 작은 메모장">
                </textarea>
            {/* </div> */}

            {/* <div className={styles.coalitionInsideBoxMain}> */}
            {/* </div> */}
            {/* <img className={styles.logo} src={coalition[0].image_url} /> */}
            </div>
    );
}

export default Coalition;