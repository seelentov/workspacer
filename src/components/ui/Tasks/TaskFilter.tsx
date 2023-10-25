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

	const inputsStyles = {
		padding: '0 10px',
		textAlign: 'left',
		color: '#000000',
		width: '100%',
		backgroundColor: 'white',
		height: '50px',
		borderRadius: '10px',
		border: '1px gray solid',
	}

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
			<button className={styles.datePicker} ref={ref} onClick={onClick}>
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
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		control: (provided: any, state: any) => ({
			...provided,
			...inputsStyles,
      padding: '0',
      background: state.selectProps.value ? state.selectProps.value.color : 'white'
		}),
	}

	return (
		<div className={styles.filter}>
			<input
				placeholder={'Имя задачи'}
				style={inputsStyles}
				type='text'
				data-attr='name'
				value={filterProps.name}
				onChange={e => setFilter({ ...filterProps, name: e.target.value })}
			/>
			<div style={inputsStyles}>
				<DatePicker
					wrapperClassName={styles.datePicker}
					data-attr='date'
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
			</div>
			<Select
				placeholder={<div>Статус задачи</div>}
				data-attr='status'
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
