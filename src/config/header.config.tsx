/* eslint-disable react-refresh/only-export-components */
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import AccountTreeIcon from '@mui/icons-material/AccountTree'
import TaskIcon from '@mui/icons-material/Task'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline'

import { ROUTING } from './routing.config'

export type MenuItem = {
	name: string
	href: ROUTING
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	icon: any
}

export const MENU: MenuItem[] = [
	{ name: 'Workspace', href: ROUTING.WORKSPACE, icon: <AccountTreeIcon /> },
	{ name: 'Tasks', href: ROUTING.TASKS, icon: <TaskIcon /> },
	{ name: 'Projects', href: ROUTING.PROJECTS, icon: <WorkOutlineIcon /> },
	{ name: 'Profile', href: ROUTING.PROFILE, icon: <AccountBoxIcon /> },
]
