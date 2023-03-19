import styles from './Badge.module.css'
import Blackhole from './Blackhole';

function Badge({ userInfo }) {
	return (
		<div>
			{
				userInfo !== undefined ?
					// 로그인 후
					<div>
						<img className={styles.blackHoleImg} src="/images/png/black_hole.png"/>
						<div className={styles.pinkTransparent}></div>
						<div className={styles.blackHoleSubText}>
							Blackhole
						</div>
						<div className={styles.blackHoleText}>
							<Blackhole userInfo={userInfo} />
						</div>
                		<img className={styles.imageSearching} src="/images/png/searching.png" />
						<div className={styles.text}>
							'팍스'가 '박스'를 뜯는 중 <br/>
							. <br/>
							. <br/>
							. <br/>
						</div>

					</div>
					: //로그인 전
					<div>
						<div className={styles.brownBox}>
						</div>
						<div className={styles.teamInfoFooter}>
							2023 Coalition Hackathon <br />
							Gon, Team 42Box, (1+3) <br />
							joowpark, chanheki, jisookim, siyang<br />
							Copyright 2023. 42Box all rights reserved.<br />
						</div>
					</div>
			}
		</div>
	);
}

export default Badge;