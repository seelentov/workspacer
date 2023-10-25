import SearchIcon from '@mui/icons-material/Search'
import { useEffect, useState } from 'react'
import { filter } from '../../../config/header.config'
import { subscribeColl } from '../../../store/api/firebase/endpoints'
import { tasks } from '../../../test.data'
import { ITask } from '../../../types/tasks'
import styles from './Header.module.scss'
import { TaskItemMin } from '../Tasks/TaskItemMin'

export const HeaderSearch = () => {
	const [input, setInput] = useState<string | ''>('')
	const [open, setOpen] = useState<boolean>(false)
  const [data, setData] = useState<ITask[]>()


  useEffect(()=>{
    subscribeColl('tasks', (r: ITask[])=>{
      setData(tasks)
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
					filter(data, input).map((item: ITask) => <TaskItemMin task={item} />)}
			</div>
		</>
	)
}


