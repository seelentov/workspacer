import SearchIcon from '@mui/icons-material/Search'
import { FC, useState } from 'react'
import { Task } from '../../../types/tasks'
import styles from './Header.module.scss'

export const HeaderSearch = () => {
	const [input, setInput] = useState<string | ''>()
	const [open, setOpen] = useState<boolean>(false)

	const data: Task[] = [
		{
			id: 'asdasdkjhafhaskjfdhasjdaksjkalsd',
			name: 'Задача 1',
			project: 'asdasdk3213123213sjdaksjkalsd',
			createTime: Date.now(),
			endTime: Date.now(),
			timing: 1091238,
			text: 'texttexttexttexttexttexttext',
			performers: ['dhfjkhskjdakjasajs'],
			initiator: 'dhfjkhskjdakjasajs',
			comments: [],
		},
		{
			id: 'asdasdkjhafhaskjfdhasjdaksjkalsd',
			name: 'Задача 2',
			project: 'asdasdk3213123213sjdaksjkalsd',
			createTime: Date.now(),
			endTime: Date.now(),
			timing: 1091238,
			text: 'texttexttexttexttexttexttext',
			performers: ['dhfjkhskjdakjasajs'],
			initiator: 'dhfjkhskjdakjasajs',
			comments: [],
		},
		{
			id: 'asdasdkjhafhaskjfdhasjdaksjkalsd',
			name: 'Задача 3',
			project: 'asdasdk3213123213sjdaksjkalsd',
			createTime: Date.now(),
			endTime: Date.now(),
			timing: 1091238,
			text: 'texttexttexttexttexttexttext',
			performers: ['dhfjkhskjdakjasajs'],
			initiator: 'dhfjkhskjdakjasajs',
			comments: [],
		},
	]

	const filter = (data: Task[]) => {
		return data?.filter((e: Task) => {
			if (!input) return
			return e.name.includes(input)
		})
	}
	return (
		<>
			<div className={styles.search}>
				<SearchIcon />
				<input
					onBlur={() => setOpen(false)}
					onClick={() => setOpen(true)}
					className={styles.searchInput}
					type='text'
					id='serach'
					name='search'
					value={input}
					onChange={e => setInput(e.target.value)}
				/>
			</div>
			<div
				className={styles.searchItems}
				style={{ display: open ? 'block' : 'none' }}
			>
				{data &&
					filter(data).map((item: Task) => <HeaderSearchItem item={item} />)}
			</div>
		</>
	)
}

export const HeaderSearchItem: FC<{ item: Task }> = ({ item }) => {
	return (
		<div className={styles.task}>
			<p>{item.name}</p>
		</div>
	)
}
