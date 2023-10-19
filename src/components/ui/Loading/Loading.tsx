import { THEME } from '../../../config/theme.config'
import styles from './Loading.module.scss'
export const Loading = () => {
	return (
		<div className={styles.loading}>
			<div
				className={styles.loader}
				style={{ borderTop: `16px solid ${THEME.MAIN_COLOR}` }}
			></div>
		</div>
	)
}
