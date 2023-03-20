import styles from './Badge.module.css'

function Badge() {
	return (
		<div>
			<div>
				<div className={styles.pinkTransparent}></div>
				<img className={styles.imageSearching} src={process.env.PUBLIC_URL + "/images/png/searching.png"} />
				<div className={styles.text}>
					'팍스'가 '박스'를 뜯는 중 <br/>
					. <br/>
					. <br/>
					. <br/>
				</div>

			</div>
			<div>
				<div className={styles.teamInfoFooter}>
					2023 Coalition Hackathon <br />
					Gon, Team 42Box, (1+3) <br />
					joowpark, chanheki, jisookim, siyang<br />
					Copyright 2023. 42Box all rights reserved.<br />
				</div>
			</div>
		</div>
	);
}

export default Badge;