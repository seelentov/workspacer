import { Dispatch, FC, SetStateAction } from 'react'
import styles from './Tasks.module.scss'
import { ITaskFilter } from '../../../types/tasks'

export interface IListPaginationProps {
	page: number
	setPage: React.Dispatch<React.SetStateAction<number>>
	total: number
	paginationItems: number
}

export const ListPagination: FC<IListPaginationProps> = ({
	page,
	setPage,
	paginationItems,
	total
}) => {
	if (paginationItems >= total) return

	const pagesTotal: number = Math.ceil(total / paginationItems)

	const changePage = (action: 1 | -1): void => {
		if ((page === pagesTotal && action === 1) || (page === 1 && action === -1))
			return
		setPage(page + action)
	}

	return (
		<div className={styles.pagination}>
			<button onClick={() => changePage(-1)} disabled={page === 1}>
				{'<'}
			</button>
			<p>{page + '/' + pagesTotal}</p>
			<button onClick={() => changePage(1)} disabled={page === pagesTotal}>
				{'>'}
			</button>
		</div>
	)
}
