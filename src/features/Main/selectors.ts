import { RootState } from 'app/store';
import { createSelector } from 'reselect'

export const selectData = (state: RootState) => state.main.data
export const selectFetching = (state: RootState) => state.main.fetching
export const selectTotal = (state: RootState) => state.main.pagination.total
export const selectPerPage = (state: RootState) => state.main.pagination.per_page
export const selectCurrentPage = (state: RootState) => state.main.pagination.currentPage
export const selectTotalPages = createSelector(
    selectTotal,
    selectPerPage,
    (total: number, perPage: number) => {
        const totalSize = total ? total : 1
        const perPageSize = perPage ? perPage : 1
        return Math.ceil(totalSize / perPageSize)
    }
)
