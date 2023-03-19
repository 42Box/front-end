import { useEffect, useState } from 'react';
import styles from './Coalition.module.css'

function Coalition({ coalition }) {
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
            <img className={styles.layer1} src="/images/png/tree.png" />
            <img className={styles.layer2} src="/images/png/inside_box.png" />
            <img className={styles.layer3} src="/images/png/42box_logo.png" />
            {/* {coalition !== undefined
                ? <img className={styles.layer3} src="/images/png/42box_logo.png" />
                : null
            } */}

            {coalition !== undefined
                ? null
                : // 로그인 안되어 있을 때
                <div>
                    <div className={styles.welcomeHelloWorld}>
                        Hello World!
                    </div>
                    <div className={styles.welcomeQuoteEng}>
                        Far out in the uncharted backwaters of <br />
                        the unfashionable end of the western spiral <br />
                        arm of the galaxy lies a small unregarded yellow sun.<br />
                    </div>
                    {/* <div class="animated-title">
                        <div class="track">
                            <div class="content">&nbsp;hi 42seoul hello world&nbsp;hi 42seoul hello world&nbsp;hi
                                42seoul hello world&nbsp;hi 42seoul hello world&nbsp;hi 42seoul hello world&nbsp;hi
                                42seoul hello world</div>
                        </div>
                    </div> */}
                    {/* <div className={`${styles.welcomeQuoteKor}${styles.blink}`}> */}
                    <div className={styles.welcomeQuoteKor}>
                        은하수를 여행하는 히치하이커님,<br />
                        여행자님만의 [42 Box]를<br />
                        이용해 보세요.<br />
                    </div>
                </div>
            }

            {coalition !== undefined
                ? //로그인 되어 있을 때
                <div>

                    <div className={styles.myCoalition}>
                        {coalition[0].name}
                    </div>
                    {/* <div className={styles.coalition}> */}
                        <textarea
                        value={memo}
                        onChange={onChange}
                        className={styles.coalition}
                        placeholder="📝 나만의 작은 메모장">
                        </textarea>
                    {/* </div> */}

                    <div className={styles.coalitionInsideBoxMain}>
                    </div>
                    <img className={styles.logo} src={coalition[0].image_url} />
                </div>
                : null
            }
        </div>
    );
}

export default Coalition;