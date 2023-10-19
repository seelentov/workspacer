import { FC } from 'react'
import { MENU } from '../../../config/header.config'
import { THEME } from '../../../config/theme.config'
import styles from './Header.module.scss'
import { HeaderSearch } from './HeaderSearch'
import { Navbar } from './Navbar'

export interface IHeaderProps {}

export const Header: FC<IHeaderProps> = () => {
	return (
		<header className={styles.main}>
			<div className={styles.wrapper}>
				<div className={styles.line} style={{ background: THEME.ALT_COLOR }}>
					<Navbar menu={MENU} />
					<HeaderLogo />
					<HeaderSearch />
				</div>
			</div>
		</header>
	)
}

const HeaderLogo = () => {
	return <div className={styles.logo}>WorkSpacer</div>
}
