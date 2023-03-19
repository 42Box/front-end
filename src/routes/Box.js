import styles from './Box.module.css'
function Box() {
    const onClick = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('urls')
    }
    return (
        <div>
            {/* backgroundBegie */}
            <div className={styles.background}>
                <div className={styles.wrapper}>
                    <div className={styles.block}></div>
                    <div className={styles.welcomefont}>
                        welcome to...
                    </div>
                    <div className={`${styles.titleText} ${styles.fontKor}`}>
                        42Box✨
                    </div>
                    <div className={`${styles.welcomefont} ${styles.colorAntiquewhite}`}>
                        카뎃을 위한 사용 설명서
                    </div>

                    <img className={styles.mainImg1} src="/images/png/opening_box.png" />
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
            <div className={styles.text2}>
                <div className={`${styles.colorAntiquewhite} ${styles.fontKor}`}>
                    먼저, 주인공 [박스]부터 소개해 드릴게요!<br />
                    <img src="/images/box_screenshot/box_icon.png" />
                </div>
                이 박스는 42Box으로 향하는 문입니다!<br />
                더블클릭하시면 42Box가 실행이 돼요.<br />
                CPU가 돌아가는 속도에 따라 <br />
                점이 빨리 로딩됩니다!
            </div>

            <img className={styles.text3} src="/images/box_screenshot/42box_main_page.png" />
            <div className={styles.text4}>
                메인 페이지입니다!<br /><br />
                [사이드 바]부터 소개해 드릴게요! 사이드 바 버튼을 <br />
                1️⃣ 1번 클릭하면, 해당 url로 들어가지고,<br />
                2️⃣ 2번 클릭하면, 새로고침이 됩니다.<br />
                3️⃣ 3번 클릭하면, 해당 url의 첫 페이지로 돌아가요!<br /><br />
                하단의 📍Pin Box는, 한번 눌러 고정해 두시면,<br />
                박스 외의 공간을 눌러도 박스가 닫히지 않아요!<br />
                맨 마지막의 ❎ Quit Box는, 본 프로그램을 종료시킵니다.<br />
            </div>

            <div className={styles.text5}>
                그럼, 이렇게 박스 안에서 여러가지 프로그램을<br />
                바로바로 사용할 수 있겠죠?(야호~)✨<br />
            </div>
            <img className={styles.imageGG} src="/images/box_screenshot/image_gg.png" />
            <img className={styles.imageLib} src="/images/box_screenshot/image_lib.png" />

            <div className={styles.text6}>
                이제 슬슬 메인 페이지에 대해서 <br />
                알아볼까 해요!
            </div>

            <div>
                <img className={styles.imageHome} src="/images/box_screenshot/home_ui.png" />
            </div>
            <div className={styles.text7}>
                메인 페이지에서는 4가지 기능을 사용할 수 있어요! <br />
                <br />
                1️⃣ 인트라 검색🔎 기능 (맨 위의 search 박스로 검색 가능!👍)<br />
                2️⃣ 메모장 📝 기능 (TO-DO list 로 사용 가능!👍)<br />
                * 뒤로가기 : 42Box 로고(맨 위에 있는 거)를 '3번' 눌러주세요!<br />
                3️⃣ 북마크 🔖 기능 (링크를 저장할 수 있음!👍)<br />
                * [name]에 보여질 이름을, [URL]에 저장할 URL을 넣어주세요!<br />
                4️⃣ 나의 블랙홀 🪐, 몇 일 남았는지 확인 가능!👍<br /><br />
                (데이터는 본인의 로컬 스토리지에 저장됩니다.)<br /><br /><br />
                ---
            </div>
            <div className={styles.team42Title}>
                Team, 42Box
            </div>
            <div className={styles.text8}>
                저희 42Box Team은, 모든 카뎃 여러분들이 42Box의<br />
                나만의 메모장과 북마크들, 한번에 나열된 42서비스들을<br />
                통해 오늘도 쾌적한 하루가 되었으면 하는 바람이 있습니다!<br /><br />

                [어린왕자] 동화에서 어린왕자가 구멍이 세 개 뚫린<br />
                상자를 보며 기뻐했던 것 처럼,<br />
                사용자 카뎃분들도 [42Box]를 통해<br />
                오늘의 하루가 조금이라도 편안하셨으면 좋겠습니다.<br /><br />
            </div>
            <div className={styles.text9}>
                (+)<br />
                ---<br />
                .<br /> <br />
                밑의 분홍색 부분은.. 여우 '팍스'가 열심히<br />
                새로운 상자를 뜯으면서 새로운 기능들을 발굴하고 있는 중이에요!<br />
                42API를 사용하여, 여러분들에게 더욱 유용한 정보들을<br />
                제공하려는 계획이 있습니다!<br />
            </div>
            <div>
                <img className={styles.imageSearching} src="/images/png/searching.png" />
            </div>
            <div className={styles.text10}>
                이 순간에도 열심히 박스를 뜯고있는 팍스를 위해...<br />
                42Box에 많은 관심 부탁드립니다~!<br /><br /><br />
            </div>
            <div className={styles.teamInfoFooter}>
                2023 Coalition Hackathon <br />
                Gon, Team 42Box, (1+3) <br />
                joowpark, chanheki, jisookim, siyang<br />
                Copyright 2023. 42Box all rights reserved.<br />
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
        </div >
    );
}

export default Box;