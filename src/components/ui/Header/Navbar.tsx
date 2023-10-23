import { FC } from 'react'
import { Link } from 'react-router-dom'
import { MenuItem } from '../../../config/header.config'
import { THEME } from '../../../config/theme.config'
import styles from './Header.module.scss'
import cn from 'classnames';

export interface INavbarProps {
	menu: MenuItem[]
	open: boolean
	setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const Navbar: FC<INavbarProps> = ({ menu, open, setOpen }) => {
	return (
		<div onClick={() => setOpen(!open)}>
			<NavbarButton open={open} setOpen={setOpen} />
			<nav
				className={cn(styles.nav, (open && styles.burgerMenuOpen))}
				style={{ background: THEME.ALT_COLOR }}
			>
				<div className={styles.navTop}></div>
				{menu.map((e, key) => (
					<div key={key}>
						{key !== 0 && <hr />}
						<NavbarItem key={key} menuItem={e} />
					</div>
				))}
			</nav>
		</div>
	)
}

export interface INavbarItemProps {
	menuItem: MenuItem
}

export const NavbarItem: FC<INavbarItemProps> = ({ menuItem }) => {
	return (
		<Link to={menuItem.href} className={styles.item}>
			<div className={styles.menuItemIcon}>{menuItem.icon}</div>
			<div className={styles.menuItemIcon}>{menuItem.name}</div>
		</Link>
	)
}

export interface INavbarButtonProps {
	open: boolean
	setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const NavbarButton: FC<INavbarButtonProps> = ({ open, setOpen }) => {
	return (
		<div
			onClick={() => setOpen(!open)}
			className={styles.burgerbtn + ' ' + (open && styles.burgerbtnOpen)}
		>
			<div></div>
			<div></div>
			<div></div>
		</div>
	)
}
