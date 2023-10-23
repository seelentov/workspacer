import { FC } from 'react'
import styles from './Tasks.module.scss'
import { Task } from '../../../types/tasks';
import { TaskItem } from './TaskItem';

export interface ITaskListProps {
  data: Task[]
  grid: number
}

export const TaskList: FC<ITaskListProps> = ({data, grid}) => {
  return (
    <div className={styles.taskList} style={{gridTemplateColumns: `repeat(${grid}, 1fr)`}}>
      {data && data.sort((a, b)=> b.createTime - a.createTime).map((e, key) => <TaskItem key={key} task={e}/> )}
    </div>
  );
}