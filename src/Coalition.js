import styles from './Coalition.module.css'

function Coalition({ coalition }) {
    return (
        <div>
            <img className={styles.layer1} src="/images/png/tree.png" />
            <img className={styles.layer2} src="/images/png/inside_box.png" />
            <img className={styles.layer3} src="/images/png/42box_logo.png" />
            {/* {coalition !== undefined
                ? <img className={styles.layer3} src="/images/png/42box_logo.png" />
                : null
            } */}

            {/* 로그인 안 되어 있을 때  */}
            {coalition !== undefined
                ? null
                : <div>
                    <div className={styles.welcomeHelloWorld}>
                        Hello World!
                    </div>
                    <div className={styles.welcomeQuoteEng}>
                        Far out in the uncharted backwaters of <br />
                        the unfashionable end of the western spiral <br />
                        arm of the galaxy lies a small unregarded yellow sun.<br />
                    </div>
                    {/* <div className={`${styles.welcomeQuoteKor}${styles.blink}`}> */}
                    <div className={styles.welcomeQuoteKor}>
                        은하수를 여행하는 히치하이커님,<br />
                        어서 [42 Box]를 이용해 보세요!<br />
                    </div>
                </div>
            }

            {coalition !== undefined
                ?
                <div>

                    <div className={styles.myCoalition}>
                        {coalition[0].name}
                    </div>

                    <div className={styles.coalition}>
                        {/* <div className={styles.item1}>
                            {coalition[0].name}
                        </div> */}
                    </div>
                    <div className={styles.item2}>
                        <img className={styles.logo} src={coalition[0].image_url} />
                    </div>
                </div>
                : null
            }
        </div>
    );
}

export default Coalition;