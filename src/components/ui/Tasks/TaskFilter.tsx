import { MDBInput } from 'mdb-react-ui-kit'
import {
	Dispatch,
	FC,
	SetStateAction,
	createElement,
	forwardRef,
	useRef,
} from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Select from 'react-select'
import { TASK_STATUSES_SELECT } from '../../../config/tasks.config'
import { ITaskFilter } from '../../../types/tasks'
import styles from './Tasks.module.scss'

export interface ITaskFilterProps {
	filterProps: ITaskFilter
	setFilter: Dispatch<SetStateAction<ITaskFilter>>
}

export const TaskFilter: FC<ITaskFilterProps> = ({
	filterProps,
	setFilter,
}) => {
	const startDate =
		filterProps.fromTime === null ? null : new Date(filterProps.fromTime)
	const endDate =
		filterProps.toTime === null ? null : new Date(filterProps.toTime)

	const ref = useRef()

	const CustomDatePicker = forwardRef(
		(
			{
				value,
				onClick,
			}: {
				value: string
				onClick: (
					event: React.MouseEvent<HTMLButtonElement, MouseEvent>
				) => void
			},
			ref
		) => (
			<button ref={ref} className={styles.filterDatePicker} onClick={onClick}>
				{value || 'Дата задачи'}
			</button>
		)
	)

	const CustomSelect = {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		option: (provided: any, state: any) => ({
			...provided,
			backgroundColor: state.data.color,
			color: 'white',
		}),
	}

	return (
		<div className={styles.filter}>
			<MDBInput
				style={{ background: 'white', height: '37px' }}
				label='Имя задачи'
				type='text'
				data-attr='name'
				value={filterProps.name}
				onChange={e => setFilter({ ...filterProps, name: e.target.value })}
			/>

			<DatePicker
      wrapperClass="mb-4"
				selectsRange={true}
				startDate={startDate}
				endDate={endDate}
				onChange={update => {
					setFilter({
						...filterProps,
						toTime: update[1]?.getTime() || null,
						fromTime: update[0]?.getTime() || null,
					})
				}}
				isClearable={true}
				customInput={createElement(CustomDatePicker)}
				ref={ref}
			/>

			<Select
				onChange={e =>
					setFilter({
						...filterProps,
						status: e?.value || 'ACTIVE',
					})
				}
				options={TASK_STATUSES_SELECT}
				styles={CustomSelect}
			/>
		</div>
	)
}
