import { FC, useState } from 'react'
import { MENU } from '../../../config/header.config'
import { THEME } from '../../../config/theme.config'
import styles from './Header.module.scss'
import { HeaderLogo } from './HeaderLogo'
import { HeaderSearch } from './HeaderSearch'
import { Navbar } from './Navbar'

export interface IHeaderProps {}

export const Header: FC<IHeaderProps> = () => {
	const [open, setOpen] = useState<boolean>(false)
	return (
		<header className={styles.main}>
			<div
				className={styles.wrapper}
				style={{ display: open ? 'block' : 'none' }}
				onClick={() => setOpen(!open)}
			></div>
			<div className={styles.line} style={{ background: THEME.ALT_COLOR }}>
				<Navbar open={open} setOpen={setOpen} menu={MENU} />
				<HeaderLogo />
				<div className={styles.headerSearch}>
					<HeaderSearch />
				</div>
			</div>
		</header>
	)
}
