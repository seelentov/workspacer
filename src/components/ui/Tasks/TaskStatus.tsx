import { FC } from 'react'
import styles from './Task'
import { TASK_STATUSES } from '../../../config/tasks.config';

export interface ITaskStatusProps {
  status: TASK_STATUSES
}

export const TaskStatus: FC<ITaskStatusProps> = ({status}) => {
  return (
    <div className={styles.status} style={{background: TASK_STATUSES[status].color}}>
      <p></p>
    </div>
  );
}