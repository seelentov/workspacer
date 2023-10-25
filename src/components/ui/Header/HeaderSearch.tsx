import SearchIcon from '@mui/icons-material/Search'
import { FC, useEffect, useState } from 'react'
import { subscribeColl } from '../../../store/api/firebase/endpoints'
import { projects, tasks, users } from '../../../test.data'
import { IProject, ITask } from '../../../types/tasks'
import { IUserAccount } from '../../../types/user'
import { ProjectItemMin } from '../Tasks/ProjectItemMin'
import { TaskItemMin } from '../Tasks/TaskItemMin'
import { UserMin } from '../User/UserMin'
import styles from './Header.module.scss'

type IFilterFunc = <T>(data: T[], input: string) => T[]

export const HeaderSearch = () => {
	const [input, setInput] = useState<string | ''>('')
	const [open, setOpen] = useState<boolean>(false)

	const filter: IFilterFunc = (data, input) => {
		return data?.filter(e => {
			if (!input) return
			return e.name.toLowerCase().trim().includes(input.toLowerCase().trim())
		})
	}

	return (
		<>
			<div className={styles.search}>
				<SearchIcon />
				<input
					onBlur={() => setOpen(false)}
					className={styles.searchInput}
					type='text'
					id='serach'
					name='search'
					value={input}
					onClick={() => {
						if (input) setOpen(true)
					}}
					onChange={e => {
						setInput(e.target.value)
						if (input) setOpen(true)
					}}
				/>
			</div>
			<div
				className={styles.searchItems}
				style={{ display: open ? 'block' : 'none' }}
			>
				<HeaderSearchBlock
					filterFunc={filter}
					dataType={'tasks'}
					filterInput={input}
				/>
				<HeaderSearchBlock
					filterFunc={filter}
					dataType={'projects'}
					filterInput={input}
				/>
				<HeaderSearchBlock
					filterFunc={filter}
					dataType={'users'}
					filterInput={input}
				/>
			</div>
		</>
	)
}

const HeaderSearchBlock: FC<{
	filterInput: string
	dataType: 'tasks' | 'users' | 'projects'
	filterFunc: IFilterFunc
}> = ({ filterInput, dataType, filterFunc }) => {
	const [data, setData] = useState<(IProject | ITask | IUserAccount)[]>()

	useEffect(() => {
		subscribeColl(dataType, r => {
			setData(
				dataType === 'tasks'
					? tasks
					: dataType === 'projects'
					? projects
					: users
			)
		})
	}, [])

	return (
		<div style={{ padding: '10px' }}>
			<h5>{dataType.toUpperCase()}</h5>
			{data &&
				dataType === 'tasks' &&
				filterFunc(data, filterInput).map((item: ITask, key) => {
					if (!item) return null
					return <TaskItemMin key={key} task={item} />
				})}
			{data &&
				dataType === 'users' &&
				filterFunc(data, filterInput).map((item: IUserAccount, key) => {
					if (!item) return null
					return <UserMin key={key} user={item} />
				})}
			{data &&
				dataType === 'projects' &&
				filterFunc(data, filterInput).map((item: IProject, key) => {
					if (!item) return null
					return <ProjectItemMin key={key} project={item} />
				})}
		</div>
	)
}
