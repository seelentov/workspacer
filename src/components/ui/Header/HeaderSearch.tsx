import SearchIcon from '@mui/icons-material/Search'
import { FC, useEffect, useState } from 'react'
import { Task } from '../../../types/tasks'
import styles from './Header.module.scss'
import { filter } from '../../../config/header.config'
import { subscribeColl } from '../../../store/api/firebase/endpoints'

export const HeaderSearch = () => {
	const [input, setInput] = useState<string | ''>('')
	const [open, setOpen] = useState<boolean>(false)
  const [data, setData] = useState<Task[]>()


  useEffect(()=>{
    subscribeColl('tasks', (r: Task[])=>{
      setData(r)
    })
  }, [])

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
          onClick={()=>{if(input) setOpen(true)}}
					onChange={e => {
            setInput(e.target.value)
            if(input) setOpen(true)
          }}
				/>
			</div>
			<div
				className={styles.searchItems}
				style={{ display: open ? 'block' : 'none' }}
			>
				{data &&
					filter(data, input).map((item: Task) => <HeaderSearchItem item={item} />)}
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
