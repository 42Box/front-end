import styles from './Badge.module.css'
import Blackhole from './Blackhole';

function Badge({ userInfo }) {
	return (
		<div>
			{
				userInfo !== undefined ?
					// 로그인 후
					<div>
						<div className={styles.pinkTransparent}>
						</div>

						Blackhole(userInfo);
						<div className={styles.blackHoleSubText}>
							Blackhole
						</div>
						<div className={styles.blackHoleText}>
							<Blackhole userInfo={userInfo} />
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