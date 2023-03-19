function Box () {
    const onClick = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('urls')
    }
    return (
        <div>
            {/* backgroundBegie */}
            <div className={styles.backgroundBegie}>
                <div className={styles.wrapper}>
                    <div className={styles.block}></div>
                    <div className={styles.welcomefont}>
                        welcome to...
                    </div>
                    <div className={`${styles.titleText} ${styles.fontKor}`}>
                        42Box
                    </div>
                    <div className={`${styles.welcomefont} ${styles.colorAntiquewhite}`}>
                        카뎃을 위한 사용 설명서
                    </div>

                    <img className={styles.mainImg1} src="/images/png/inside_box.png" />
                </div>

                <div className={styles.text1}>
                    .<br />
                    .<br /><br />
                    저희 [42Box]는 카뎃 여러분들이,<br />
                    클러스터 맥이나 개인 맥북에서<br />
                    42서울의 여러가지 서비스들을 손쉽게 이용할 수 있도록 <br />
                    도와주는 플랫폼입니다!<br />
                    (macOS 웹앱)
                </div>
            </div>

            {/* backgroundGreen */}
            <div className={styles.backgroundGreen}>

            </div>

            {/* cartoon */}
            <div>
                <div className={styles.visibleHidden}>
                    <div className={styles.wrapper}>
                        <div className={`${styles.box} ${styles.grid}`}>
                        </div>
                        <div className={styles.titleText}>
                            We, 42Box!
                            <div className={styles.authorText}>
                                글/그림 jisookim
                            </div>
                        </div>
                    </div>

                    <div>
                        <img className={styles.cut1} src="/images/cartoon/cut1.png" />
                        <img className={styles.cut2} src="/images/cartoon/cut2.png" />
                        <img className={styles.cut3} src="/images/cartoon/cut3.png" />
                        <img className={styles.cut4} src="/images/cartoon/cut4.png" />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Box;